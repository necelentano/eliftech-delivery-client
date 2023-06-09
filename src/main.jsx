import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </Provider>
);
