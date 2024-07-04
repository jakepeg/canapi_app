import { useEffect, useState } from "react";
import { canapi_app_backend } from "declarations/canapi_app_backend";
import { useAuth } from "./hooks/Auth";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/layout/SideNav';
import Header from './components/layout/Header';
import './assets/css/index.css';
import Canisters from "./screens/Canisters";
import DataStore from "./screens/DataStore";
import API from "./screens/API";
import Docs from "./screens/Docs";
import Marketplace from "./screens/Marketplace";
import Account from "./screens/Account";
import Projects from "./screens/Projects";

function App() {
  return (
    <Router>
      <div className="h-screen flex overflow-hidden">
        <Nav />
        <div className="flex flex-col w-full">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/canisters" element={<Canisters />} />
              <Route path="/datastores" element={<DataStore />} />
              <Route path="/apis" element={<API />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
