import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const guestNav = [
  { to : '/', text: 'Login' },
  { to : '/register', text: 'Register' },
]

const userNav = [
  { to : '/', text: 'Home' },
  { to : '/new', text: 'New Todo' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-base-50" style={{ backgroundImage: 'url(https://images.pexels.com/photos/16850990/pexels-photo-16850990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ชำระสินเชื่อรถยนต์</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <div className="indicator" style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
    <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" >
    </svg>
    <span className="badge badge-sm indicator-item" style={{ marginLeft: '0.1rem' }}>4</span>
</div>

      </div>
      <div tabIndex={0} className="fa-solid fa-envelope card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg"> 4 </span>
          <div className="card-actions">
            <Link to="/Chat"><button className="btn btn-primary btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link to="/Pro"><li>
          <a className="justify-between">
            Profile
            <span className="badge" onClick={hdlLogout}>New</span>
          </a>
        </li></Link>
        <li className='btn-error'>
            <Link to='#' className="text-red-500" onClick={hdlLogout}>Logout</Link> </li>
      </ul>
    </div>
  </div>
</div>
  );
}
