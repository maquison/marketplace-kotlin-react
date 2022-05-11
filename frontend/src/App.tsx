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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
