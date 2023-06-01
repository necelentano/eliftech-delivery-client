import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layouts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":slug" element={<Shop />} />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="history" element={<History />} />
    </Routes>
  );
}

export default App;
