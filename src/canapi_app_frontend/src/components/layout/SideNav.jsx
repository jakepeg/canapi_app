import {React, useEffect} from 'react';
import { useAuth } from "../../hooks/Auth";
import { NavLink, useLocation } from 'react-router-dom'; // Import Link and useLocation
import logoImage from '../../assets/images/logo.png';
import poweredByImage from '../../assets/images/poweredby.png';

export default function Nav() {
  const { login, logout, principal, isAuthenticated } = useAuth();
  const location = useLocation(); // Get current location for active link styling
  useEffect(() => {}, [isAuthenticated, principal]);
  return (
    <div className="w-80 bg-white border-r border-gray-200 shadow-lg h-full flex flex-col justify-between">
      <img src={logoImage} alt="CanAPI no-code blockchain" className="w-48 h-auto p-2" /> 
      <div className="flex-grow overflow-auto"> 
        {isAuthenticated && (
          <ul className="space-y-3 px-4 mt-8">
              <li key="/projects">
                <NavLink to="/projects">My Projects</NavLink>
              </li>
              <li key="/canisters">
                <NavLink to="/canisters">Canisters</NavLink>
              </li>
              <li key="/datastores">
                <NavLink to="/datastores">DataStores</NavLink>
              </li>

              <li key="/apis">
                <NavLink to="/apis">APIs</NavLink>
              </li>

              <li key="/docs">
                <NavLink to="/docs">Docs</NavLink>
              </li>
              <li key="/marketplace">
                <NavLink to="/marketplace">Marketplace</NavLink>
              </li>
              <li key="/account">
                <NavLink to="/account">Account</NavLink>
              </li>
          </ul>
        )}
        {!!!isAuthenticated && (
          <button onClick={login}>Log In with II</button>
        )}
      </div>

      <img src={poweredByImage} alt="Powered By ICP badge" className="w-36 h-auto p-2 place-self-center" />
    </div>
  );
}
