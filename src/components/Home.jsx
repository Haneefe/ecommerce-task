import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import fetchData from '../data/fetchData'
import Spinner from './Spinner'
import { useDispatch } from 'react-redux'
import "./Home.css"
import { addToCart } from '../feautures/cartSlice'
const Home = () => {
  const [productData,setProductData]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [page,setPage]=useState(1)
  const dispatch=useDispatch();
  const navigate=useNavigate();
useEffect(()=>{
  setIsLoading(true)
fetchData().then((data)=>{
  setProductData(data.data.products)
 }).catch((error)=>{
  console.log(error)
 }).finally(()=>{
  setIsLoading(false)
 })
},[])
console.log(productData)
const handleCart=(prod)=>{
  
    dispatch(addToCart(prod))
    navigate('/cart')
  


}
const Product=productData?.slice(page*10-10,page*10-1).map((prod)=>{
 return<div key={prod.id} className='product'>
<h3>{prod.title}</h3>
<img src={prod.thumbnail} alt={prod.title}/>
<div className='details'>
  <span>{prod.description}</span>
  <span className='price'>${prod.price}</span>
</div>
<button className='addcartbtn' onClick={()=>handleCart(prod)}>Add To Cart</button>
</div>  
})
const selectPageHandler = (selectedPage) => {
  
  if (selectedPage >= 1 && selectedPage <= productData.length / 10 && selectedPage !== page) {
    setPage(selectedPage)
  }

}
  return (
    <div className='homecontainer'>{isLoading ?<Spinner loading={isLoading}/>:
   
   <>
    <h2>New Arrivals</h2>
    <div className='products'>
     
      {Product.length>0 && Product}
    </div>
    {productData.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(productData.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < productData.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </>
    }
   
  
    </div>
  )
}

export default Home