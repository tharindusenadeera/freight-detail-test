import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import App from "./App";
import rootReducer from "./reducers";
import "./index.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteIndex from "./pages/index";
import ShipmentDetails from "./pages/details";
// const SiteIndex = lazy(() => import("./pages"));

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router onUpdate={() => console.log("updated")}>
        <Switch>
          <React.Fragment>
            {/* <Suspense fallback={() => {}}> */}
              <Route exact path="/" component={SiteIndex} />
            {/* </Suspense> */}
              <Route path="/details" component={ShipmentDetails} />
          </React.Fragment>
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById("root")
);
