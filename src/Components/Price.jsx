export function Price({ price }) {
  return (
    <>
      {/* <!-- Product price--> */}
      {price.old_price ? <OldPrice old_price={price.old_price} /> : ""}{" "}
      {price.new_price ?? ""}
      {price.price_range ?? ""}
    </>
  );
}
function OldPrice({ old_price }) {
  return (
    <span class="text-muted text-decoration-line-through">{old_price}</span>
  );
}
