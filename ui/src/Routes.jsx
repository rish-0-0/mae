import {createBrowserRouter} from 'react-router-dom';
import CreateNew from '@/pages/editor';
import Layout from "@/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'new',
        element: <CreateNew />
      }
    ]
  }
]);

export default router;