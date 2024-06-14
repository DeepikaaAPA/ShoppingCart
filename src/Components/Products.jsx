import items from "../Data/items.json";
import { Card } from "./Card";

export function Products({ noOfItems, setNoOfItems }) {
  console.log("No of items :", noOfItems);
  return (
    <section>
      <div className="container px-4 px-lg-5 mt-2">
        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {items.map((i) => {
            // console.log("i=", i);
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
