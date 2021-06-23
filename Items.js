import React from 'react'
import  Product from '../components/Product';
const Items = () => {
    return (
        <div className="container mx-auto pb-24 mr-20 ml-10 mr-10">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">               
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
            </div>
        </div> 
    )
}


export default Items
