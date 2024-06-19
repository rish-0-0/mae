import { MantineProvider, createTheme } from '@mantine/core';
import {RouterProvider} from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import router from './Routes';
import './App.css';

const theme = createTheme();

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
