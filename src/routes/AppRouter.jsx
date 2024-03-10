import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import Homepage from '../components/Homepage'
import UserHome from '../layout/UserHome'
import Userprofile from '../layout/Userprofile'
import Serve from '../layout/Serve'
import Userpage from '../layout/Userpage'
import Billpage from '../layout/ฺBillpage'
import Chatpage from '../layout/Chatpage'
import Servepage from '../layout/Servepage'
import Statuspage from '../layout/Statuspage'
import Contact from '../layout/Contact'


const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />}
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/User', element: <UserHome /> },
      { path: '/new', element: <Serve/> },
      { path: '/Pro', element: <Userprofile /> },
      { path: '/Page', element: <Userpage /> },
      { path: '/Home', element: <Homepage /> },
      { path: '/Bill', element: <Billpage /> },
      { path: '/Chat', element: <Chatpage /> },
      { path: '/Servepage', element: <Servepage /> },
      { path: '/Statuspage', element: <Statuspage /> },
      { path: '/Contact', element: <Contact /> },

    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}
