export function Price({ price }) {
  return (
    <>
      {/* <!-- Product price--> */}
      {/* show old price in muted, striked out format if its a sale item.
      if oldprice is null, its not a sale item. price is present in new price or price_range for cards that show an item group. */}
      {price.old_price ? <OldPrice old_price={price.old_price} /> : ""}{" "}
      {/* Only either one of new-price or price-range only will be present */}
      {price.new_price ?? ""}
      {price.price_range ?? ""}
    </>
  );
}
function OldPrice({ old_price }) {
  // Return old price in required format
  return (
    <span className="text-muted text-decoration-line-through">{old_price}</span>
  );
}
