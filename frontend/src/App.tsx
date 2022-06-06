import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Listing from "pages/Listing";
import ItemPage from "pages/ItemPage";
import Cart from "pages/Cart";
import Orders from "pages/Orders";
import Login from "pages/Login";
import Register from "pages/Register";
import Address from "pages/Address";
import Payment from "pages/Payment";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/item">
          <Route path=":itemId" element={<ItemPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
