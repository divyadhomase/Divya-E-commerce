import './App.css';
import Navbar from './Components/Navbar';
// import image from './main_img.jpg';
import Home from './Components/Home';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App" >
      <Navbar></Navbar>
      <Home></Home>
      <ProductList></ProductList>

      {/* <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + "/bg image.jpg"})`,
      height: "540px", backgroundRepeat: "no-repeat", width:"100%",
      
    }} ></div>  */}

   
      
    </div>
  );
}

export default App;
