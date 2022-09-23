import { BiDislike, BiLike } from 'react-icons/bi';

const QuestionCard = () => {
  return (
    <div className="card">
      <span className="card-text">Do sentient AI deserve rights?</span>
        <BiDislike/>
        <BiLike/>
    </div>
  )
}
export default QuestionCard;