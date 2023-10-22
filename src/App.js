import { BrowserRouter  as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import PageContainer from './containers/PageContainer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Details from './pages/Details';
import Carts from './pages/Carts';
import { useState } from 'react';

function App() {
  const [search,setSearch] = useState("");
  return (
    <div className="App">
      <PageContainer>
      <Router>
        <Navbar search = {search} setSearch = {setSearch}/>
        <Routes>
          <Route path = "/" element= {<Home search = {search}/>}/>
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </Router>
      </PageContainer>
    </div>
  );
}

export default App;
