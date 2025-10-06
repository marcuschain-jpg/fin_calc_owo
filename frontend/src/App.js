import React, { useEffect, useState } from 'react'

const App = () => {

  const [user,setUser] = useState([])

    const getUser= () =>{
      fetch("/backend/user")
      .then(res => res.json())
      .then(json => setUser(json))
    }

    useEffect(()=>{
      getUser()
    },[])

  return (
    <div>
        {user.map((data)=>{
          return <>
          <div style={{border: "1px solid"}}>
            <h1>Name: {data.name}</h1>
            <h1>Username: {data.username}</h1>
            <h1>Name: {data.email}</h1>
          </div>
          </>
        })}
    </div>
  )
}

export default App