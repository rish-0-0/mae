import { Container, Text } from "@mantine/core";
import FocusEditor from "./Editor";

function CreateNew () {
  return (
    <Container fluid>
      <Text>Create a new objective using the UI below</Text>
      <FocusEditor />
    </Container>
  );
}

export default CreateNew;