import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {AuthContextProvider} from "./context/authContex"
//Pages
import { HomePage } from "./pages";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Preview } from "./pages/preview";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthContextProvider><HomePage/></AuthContextProvider>
    },
    {
      path: "/preview",
      element: <AuthContextProvider><Preview/></AuthContextProvider>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
  ])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
