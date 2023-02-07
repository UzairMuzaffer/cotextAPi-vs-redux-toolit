import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ContextApp from "./ContextApp";
import ToolkitApp, { store } from "./ToolkitApp";

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


      <div>ToolkitApp:
        <Provider store={store}>
          <ToolkitApp />
        </Provider>
      </div>
    </div>
  </React.StrictMode>
);
