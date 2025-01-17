import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routes/home"
import Login from "./routes/login"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { useEffect, useState } from "react"
import LoadingScreen from "./components/loading-screen"
import { auth } from "./firebase";
import CreateAccount from "./routes/create-account"
import ProtectedRoute from "./components/protected-route"
import Profile from "./routes/profile"

const router = createBrowserRouter([
    {
        path:"/",
        element:<ProtectedRoute><Layout/></ProtectedRoute>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"profile",
                element:<Profile/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/create-account",
        element:<CreateAccount/>

    }
])

const GlobalStyles = createGlobalStyle`
    ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

;`



function App() {
    const [isloading,setloading] = useState(true)
    const init = async () => {
        // wait firebase
        await auth.authStateReady()
        setloading(false)
    }
    useEffect(() => {
        init()
    },[])

    return(<>
    <GlobalStyles/>
    {isloading ? <LoadingScreen/> : <RouterProvider router={router}/>}
    </>)

}

export default App
