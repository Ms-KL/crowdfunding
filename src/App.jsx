import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

// Components
import Nav from "./components/Nav/nav";

// CSS
import "./App.css";


const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);
// : = path param

function App() {
  return <RouterProvider router={router} />;
}

export default App;