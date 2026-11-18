import { Star } from "lucide-react";

export default function Stars({ size = 15 }) {
  return (
    <span className="stars" role="img" aria-label="Rated 4.7 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}
