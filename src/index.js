// import React, { Component } from "react";
// import { render } from "react-dom";

import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
const root = createRoot(
    document.getElementById("root") as HTMLElement
);


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



import { BsModal } from "./bs-modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-0">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              OwnHands
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-md-auto mr-md-1 ml-sm-2">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main class="py-5">
          <h1>OwnHands Story Search</h1>

          <h2>To Do</h2>

          <ul>
            <li>Audit / Update npm modules</li>
            <li>authorization (Firebase)</li>
            <li>Data (Firebase)</li>
          </ul>

          <h2>React updates</h2>
          <ul>
            <li>https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis</li>
          </ul>

          <BsModal />
        </main>


      </div>
    );
  }
}

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
reportWebVitals();

// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// render(<App />, document.getElementById("root"));
