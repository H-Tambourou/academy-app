import { BiDislike, BiLike } from 'react-icons/bi';

interface cardProps {
  data: any;
}

const Card = ({ data }: cardProps) => {
  return (
    <div className="card">
      <span className="card-text">{data.title}</span>
      <div className="card-butn-gr">
        <BiDislike className="card-butn"/>
        <BiLike className="card-butn"/>
      </div>
    </div>
  )
}
export default Card;