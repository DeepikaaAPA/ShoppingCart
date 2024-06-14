import { useState } from "react";
import items from "../Data/items.json";
import { Rating } from "./Rating";
import { Price } from "./Price";

export function Products({ noOfItems, setNoOfItems }) {
  console.log("No of items :", noOfItems);
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {items.map((i) => {
            console.log("i=", i);
            return (
              <Card
                noOfItems={noOfItems}
                setNoOfItems={setNoOfItems}
                item={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Card({ noOfItems, setNoOfItems, item }) {
  //   console.log(item.id, a);
  let [inCart, setInCart] = useState(false);
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {item.sale ? <Sale /> : ""}

        {/* <!-- Product image--> */}

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
