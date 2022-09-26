import { BiDislike, BiLike } from 'react-icons/bi';

interface cardProps {
  data: any;
}

const Card = ({ data }: cardProps) => {
  return (
    <div className="card">
      <span className="card-text">{data.title}</span>
        <BiDislike/>{}
        <BiLike/>
    </div>
  )
}
export default Card;