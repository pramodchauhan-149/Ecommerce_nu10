import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar title="StyleCart ✅" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
