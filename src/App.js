import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import LoginBootstrap from './components/LoginBootstrap';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

const router = createBrowserRouter([

  {
    path: '/',
    element:<Main />,
    children: [
      {path: '/', element: <RegisterReactBootstrap />},
      {path: '/register', element: <RegisterReactBootstrap />},
      {path: '/login', element: <LoginBootstrap />},
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
