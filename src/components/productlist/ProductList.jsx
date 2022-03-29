import {React,useEffect} from 'react';
import Product from '../product/Product';
import './ProductList.css';
import Aos from 'aos';
function ProductList() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='pl' data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className="pl-texts">
            <h1 className="pl-title">PROJECTS</h1>
        </div>
        <div className="pl-list">
            <Product productImg={'/assets/socialmediaapp.PNG'} productdescp={'Social Media App'} pdemo={'https://hassanbook.herokuapp.com/'} />
            <Product productImg={'/assets/chatapp.jpg'} productdescp={'Chat Application'} pdemo={'https://hassan9798.github.io/Chat-app'} />
            <Product productImg={'/assets/furnitureweb.png'}productdescp={'Furniture Web App'} pdemo={'https://github.com/Hassan9798/Furniture-Web-Store'} />
            <Product productImg={'/assets/login.png'}productdescp={'Login And Register'} pdemo={'https://github.com/Hassan9798/Login-Registration-with-authentication-and-authorization'} />
           

        </div>
    </div>
  )
}

export default ProductList