import { useState } from "react";
import { Rating } from "./Rating";
import { Price } from "./Price";

export function Card({ noOfItems, setNoOfItems, item }) {
  //   console.log(item.id, a);
  let [inCart, setInCart] = useState(false);
  return (
    <div className="col mb-2">
      <div className="card h-100">
        {item.sale ? <Sale /> : ""}

        {/* <!-- Product image--> */}

        <img className="card-img-top" src={item.pic} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-1">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{item.name}</h5>
            {/* product rating => calls Rating component */}
            {item.rating ? <Rating r={item.rating} /> : ""}
            {/* <!-- Product price--> */}
            <Price price={item.price} />
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {item.price.price_range ? (
              <button className="btn btn-outline-dark mt-auto">
                View Options
              </button>
            ) : (
              <button
                onClick={() => {
                  inCart
                    ? setNoOfItems(noOfItems - 1)
                    : setNoOfItems(noOfItems + 1);
                  setInCart(!inCart);
                }}
                className="btn btn-outline-dark mt-auto"
              >
                {inCart ? "Remove From Cart" : "Add To Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function Sale() {
    return (
      <div
        className="badge bg-dark text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        Sale
      </div>
    );
  }
}
