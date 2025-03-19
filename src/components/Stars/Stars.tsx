import Star from '../Star/Star';
import './stars.css';

type TStarsProps = {
  count?: number;
};

const Stars = ({ count }: TStarsProps) => {
  count = typeof count !== 'number' || count < 1 || count > 5 ? 0 : count;

  return (
    <ul className="card-body-stars">
      {[...Array(count)].map((_, idx) => (
        <Star key={idx} />
      ))}
    </ul>
  );
};

export default Stars;
