import { createContext, useState } from "react";
import { Container, Title, Space, Button } from "@mantine/core";
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { INTL_DATE_FORMAT } from "@/constants";
import { showErrorNotification } from "@/helpers/notifications";
import { CREATE_NEW } from "@/api-urls";
import FocusEditor from "./Editor";

export const CreateNewContext = createContext(null);

async function postObjective (data) {
  try {
    const res = await fetch(CREATE_NEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('Network Error');
    return await res.json();
  } catch (e) {
    showErrorNotification('Error', `An error ocurred while creating an objective. ${e.message}`);
  }
}

function CreateNew () {
  const queryClient = useQueryClient();
  const [loading, {open, close}] = useDisclosure();
  const mutation = useMutation({
    mutationFn: (data) => postObjective(data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['objectives']});
      close();
    },
    onMutate: () => open(),
    onError: () => close()
  });

  const [editor, setEditor] = useState(null);
  const [dates, setDates] = useState([null, null]);

  return (
    <CreateNewContext.Provider value={{editor, setEditor}}>
      <Container fluid>
        <Title textWrap="balance">Scribe a new objective</Title>
        <Space h="md" />
        <FocusEditor />
        <Space h="md" />
        <Title order={3}>Tailor your objective: Choose your ideal timeframe</Title>
        <Space h="md" />
        <DatePickerInput
          leftSection={(<IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />)}
          type="range"
          leftSectionPointerEvents="none"
          placeholder="Pick a date range"
          allowSingleDateInRange
          minDate={new Date()}
          value={dates}
          onChange={setDates}
          className="date-picker"
        />
        <Space h="md" />
        <Button disabled={loading} loading={loading} onClick={() => mutation.mutate({
          objectives: editor?.getHTML() ?? '',
          user: 'Sample user',
          objectivesDateBegin: dayjs().format(INTL_DATE_FORMAT),
          objectivesDateEnd: dayjs().add(1, 'week').format(INTL_DATE_FORMAT)
        })}>Submit Objective</Button>
      </Container>
    </CreateNewContext.Provider>
  );
}

export default CreateNew;