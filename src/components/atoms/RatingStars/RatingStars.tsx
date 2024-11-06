import EmptyStar from "./icons/EmptyStar";
import FilledStar from "./icons/FilledStar";
import styles from "./RatingStars.module.css";

interface RatingStarsProps {
  rating?: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  if (!rating) return null;

  const normalizedRating = Math.min(5, Math.max(1, rating));

  return (
    <div className={`${styles.RatingStars}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <span key={starIndex} className={`${styles.RatingStars__star}`}>
          {starIndex <= normalizedRating ? <FilledStar /> : <EmptyStar />}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
