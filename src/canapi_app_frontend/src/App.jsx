import { useEffect, useState } from "react";
import { canapi_app_backend } from "declarations/canapi_app_backend";
import { useAuth } from "./hooks/Auth";
import Nav from './components/layout/nav';
import Header from './components/layout/Header';
import MainView from './components/layout/MainView';
import './assets/css/index.css';

function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Nav />
      <div className="flex flex-col w-full">
        <Header />
        <MainView />
      </div>
    </div>
  );
}

export default App;
