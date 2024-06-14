export function Cart({ noOfItems }) {
  return (
    <span className="badge bg-dark text-white ms-1 rounded-pill">
      {noOfItems}
    </span>
  );
}
