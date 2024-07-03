import { useEffect, useState } from "react";
import { canapi_app_backend } from "declarations/canapi_app_backend";
import { useAuth } from "./Hooks/Auth";

function App() {
  const { login, logout, principal, isAuthenticated } = useAuth();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {}, [isAuthenticated, principal]);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    canapi_app_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
        
      {isAuthenticated && (
        <div>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-grey-700">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <button type="submit">Click Me!</button>
          </form>
          <button 
            className="font-bold"
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
      <section id="greeting"><span className="text-3xl font-bold underline">{greeting}</span></section>
    </main>
  );
}

export default App;
