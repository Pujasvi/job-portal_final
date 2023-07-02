import React,{useState} from 'react'

function useAuth() {
  const [authenticated,setAuthenticated] =useState(false);

  return (
    <div>useAuth</div>
  )
}

export default useAuth