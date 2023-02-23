import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import PledgePage from "./pages/PledgePage";
import RegistrationPage from "./pages/RegistrationPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import UserPage from "./pages/UserPage";

// Components
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css";


// const HeaderLayout = () => (
//   <div>
//     <Nav />
//     <Outlet />
//   </div>
// );

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    // element: <HeaderLayout />,
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
      { path: "/login", element: <LoginPage />},
      { path: "/pledges", element: <PledgePage />},   
      { path: "/register", element: <RegistrationPage />},   
      { path: "/create-project", element: <CreateProjectPage />},
      { path: "/user/:id", element: <UserPage /> },        
    ],
  },
]);
// : = path param

function App() {
  return <RouterProvider router={router} />
}

export default App;