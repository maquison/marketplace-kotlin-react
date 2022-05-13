import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Listing from "pages/Listing";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Orders from "pages/Orders";
import Login from "pages/Login";
import Register from "pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/item">
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
