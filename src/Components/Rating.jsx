import { Star } from "./Star";

export function Rating({ r }) {
  // console.log(r,typeof(r))
  let stars = [];
  for (let i = 1; i <= r; i++) {
    stars.push(i);
  }
  return (
    <div className="d-flex justify-content-center small text-warning mb-2">
      {stars.map((s) => (
        <Star />
      ))}
    </div>
  );
}
