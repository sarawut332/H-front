import axios from 'axios'
import {useEffect, useState} from 'react'
import Listpage from './Listpage'

export default function UserHome() {
  const [todos, setTodos] = useState([])

  useEffect( ()=>{
    const run = async()=>{
      let token = localStorage.getItem('token')
      const rs = await axios.get('http://localhost:8889/todos', {
        headers : { Authorization : `Bearer ${token}`}
      })
      setTodos(rs.data.todos)
    }
    run()
  }, [] )

  return (
    <>
        <Listpage />
    </>
)
}