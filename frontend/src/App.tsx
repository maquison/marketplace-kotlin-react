import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Listing from "pages/Listing";
import Item from "pages/Item";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/item">
          <Route path=":itemId" element={<Item />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
