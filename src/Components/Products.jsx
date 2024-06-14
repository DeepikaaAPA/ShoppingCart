import { useState } from "react";
import items from "../Data/items.json";
import { Rating } from "./Rating";

export function Products() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {items.map((i) => {
            console.log("i=", i);
            return <Card item={i} a="10" />;
          })}
        </div>
      </div>
    </section>
  );
}
function Card({ item, a }) {
//   console.log(item.id, a);
let [inCart,setInCart]=useState(false)
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        0
        <img className="card-img-top" src={item.pic} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{item.name}</h5>
            {item.rating ? <Rating r={item.rating} /> : ""}
            {/* <!-- Product price--> */}
            <Price price={item.price} />
            
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button onClick={()=>{setInCart(!inCart);}} className="btn btn-outline-dark mt-auto" href="#">
             {inCart?"Remove From Cart":"Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Price({ price }) {
  return (
    <>
      {/* <!-- Product price--> */}
      {price.old_price ? <OldPrice old_price={price.old_price} /> : ""}
      {" "}{price.new_price ?? ""}
      {price.price_range ?? ""}
    </>
  );
}
function OldPrice({ old_price }) {
  return (
    <span class="text-muted text-decoration-line-through">{old_price}</span>
  );
}
