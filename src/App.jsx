import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import Advertisement from './components/Advertisement'
import UsersList from './components/UsersList'

function App() {

  const [usersList, setUsersList] = useState([])
  const [newForm, setNewForm] = useState(false)
  const [userSelected, setUserSelected] = useState(null)
  const [WindowAdv, setWindowAdv] = useState(false)
  const [userDeleted, setUserDelete] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud-yeqv.onrender.com/users/')
      .then(res => setUsersList(res.data))
  }

  const selectUser = (user) => {
    setNewForm(true)
    setUserSelected(user)
  }

  const userWindow = (user) => {
    setWindowAdv(true)
    setUserDelete(user)
  }

  const cancelDelete = () => {
    setWindowAdv(false)
    setUserDelete(null)
  }

  const deleteUser = (userDeleted) => {
    axios.delete(`https://users-crud-yeqv.onrender.com/users/${userDeleted.id}/`)
        .then(() => {
          getUsers()
          setWindowAdv(false)
          setUserDelete(null)
        })
  }

  return (
    <div className="App">
      <UsersList
        usersList={usersList}
        setNewForm={setNewForm}
        selectUser={selectUser}
        getUsers={getUsers}
        userWindow={userWindow}
      />
      {newForm &&
        <UserForm
          setNewForm={setNewForm}
          getUsers={getUsers}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      }
      {WindowAdv &&
        <Advertisement
          userDeleted={userDeleted}
          cancelDelete={cancelDelete}
          getUsers={getUsers}
          deleteUser={deleteUser}
        />
      }

      <footer>
        <p>Done by <strong>JuanQuéz</strong> | Developer</p>
      </footer>
    </div>
  )
}

export default App
