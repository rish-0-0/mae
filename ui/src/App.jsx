import { MantineProvider, createTheme } from '@mantine/core';
import {RouterProvider} from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import router from './Routes';
import './App.css';

const theme = createTheme();

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
