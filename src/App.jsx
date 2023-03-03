import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

// Pages to import and set to path in router
import AboutPage from "./pages/AboutPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import ContactPage from "./pages/ContactPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PledgePage from "./pages/PledgePage";
import ProjectPage from "./pages/ProjectPage";
import PutSessionUserPage from "./pages/PutSessionUserPage";
import RegistrationPage from "./pages/RegistrationPage";
import SessionUserPage from "./pages/SessionUserPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

// Components - to render on every page
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";


// CSS 
import "./App.css";


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
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
      { path: "/create-project", element: <CreateProjectPage />},
      { path: "/login", element: <LoginPage />},
      { path: "/pledges", element: <PledgePage />},  
      { path: "/projects", element: <AllProjectsPage /> },       
      { path: "/projects/:id", element: <ProjectPage /> }, 
      { path: "/register", element: <RegistrationPage />},   
      { path: "/users/:id", element: <UserPage /> },   
      { path: "/users/session", element: <SessionUserPage /> }, 
      { path: "/users/session/edit", element: <PutSessionUserPage /> }, 
      { path: "/users", element: <UsersPage /> },      
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App;

// : = path param



// const HeaderLayout = () => (
//   <div>
//     <Nav />
//     <Outlet />
//   </div>
// );