import React from 'react'
import axios from 'axios'
const fetchData = async() => {
  const response=await axios.get('https://dummyjson.com/products')
  return response
}

export default fetchData