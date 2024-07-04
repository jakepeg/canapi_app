import React from 'react'
import { useAuth } from "../../hooks/Auth";
export default function Header() {

  const { login, logout, principal, isAuthenticated } = useAuth();

  return (
    <div className="flex justify-end p-4">
      {!!!isAuthenticated && (
        <button onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connect</button>
      )}
      {isAuthenticated && (
        <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Disconnect</button>
      )}
    
    </div>
  )
}
