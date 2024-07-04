import React from 'react'
import { useEffect, useState } from "react";
// import { canapi_app_backend } from "../declarations/canapi_app_backend";
import { useAuth } from "../../hooks/Auth";

export default function Nav() {

  const { login, logout, principal, isAuthenticated } = useAuth();
  useEffect(() => {}, [isAuthenticated, principal]);

  return (
    <div className="w-80 bg-white border-r border-gray-200 shadow-lg h-full">
      Nav content

      {isAuthenticated && (
        <div>
          <button 
            onClick={() => {
              logout();
            }}
          >
            log out
          </button>
        </div>
      )}
      {!!!isAuthenticated && (
        <button
          onClick={() => {
            login();
          }}
        >
          log in with II
        </button>
      )}


    </div>
  )
}
