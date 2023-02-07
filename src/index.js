import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ContextApp from "./ContextApp";
import ReduxToolkitApp, { store } from "./ReduxToolkitApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <div>
        ContextApp: <ContextApp />
      </div>


      <br />
      <br />
      <br />
      <br />


      <div>ReduxToolkitApp:
        <Provider store={store}>
          <ReduxToolkitApp />
        </Provider>
      </div>
    </div>
  </React.StrictMode>
);
