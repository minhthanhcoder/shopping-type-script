import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { add_cart } from '../actions/ListProAction'

import "./listProducts.css"

type Product = {
    listProducts: []
    product_id: number,
    product_name:string,
    image:string,
    price: number,
    ratting: number,
    description:string
}
const ListProducts:React.FC<{}> = () => {
    const listPro = useSelector((state:Product)=>state.listProducts)
    console.log(listPro);
    const dispatch = useDispatch()
    const handleAddToCart = (pro:Product) => {
        dispatch(add_cart(pro))
    }
    
  return (
    <div>
      <Navbar/>
      <>
  {/* List product start */}
  <section style={{ backgroundColor: "#eee" }}>
    <div className="text-center container py-5">
      <h4 className="mt-4 mb-5">
        <strong>DANH SÁCH SẢN PHẨM</strong>
      </h4>
      <div className="row">
        {listPro.map((pro:Product)=>
        <div key={pro.product_id} className="col-lg-4 col-md-12 mb-4" >
          <div className="card">
            <div
              style={{height:"300px",width:"100%"}}
              className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light"
            >
              <img 
                src= {pro.image}
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </div>
              </a>
            </div>
            <div className="card-body">
              <a href="" className="text-reset">
                <h5 className="card-title mb-3">{pro.product_name}</h5>
              </a>
              <div className='ratting'>
                
              <div className="ratting-star">
              <input  type="radio" name='ratting-star'/>
              <input  type="radio" name='ratting-star'/>
              <input  type="radio" name='ratting-star'/>
              <input type="radio" name='ratting-star'/>
              <input type="radio" name='ratting-star'/>
              <input type="radio" name='ratting-star'/>
              <input type="radio" name='ratting-star'/>
              <input  type="radio" name='ratting-star'/>
              <input  type="radio" name='ratting-star'/>
              <input type="radio" name='ratting-star'/>
              </div>
              <div className='ratting_sales-turn'>(199)</div>
              </div>
              <h6 className="mb-3">{pro.price}</h6>
              <button onClick={()=>handleAddToCart(pro)} className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
        )}
        
      </div>
    </div>
  </section>
  {/* List product end */}
</>
<Footer/>
    </div>
  )
}

export default ListProducts
