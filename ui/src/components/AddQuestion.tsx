import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';

const AddQuestion = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  
  const closeForm = () => {
    setShowForm(false);
  }

  const handleNewQuestion = () => {

  }
  
  return (
    <>
      <div className="addGroup">
        <BiAddToQueue onClick={() => setShowForm(true)} className='addGroup-Icon' style={{width:"40px", height:"40px", cursor:"pointer"}} />
        <span>Add your question</span>
      </div>
      <div className={`form-wrapper ${showForm}`}>
        <form className="form" onSubmit={handleNewQuestion}>
            <label>Question</label>
            <input type="text" placeholder="Enter question" required />
            <button type="button" className='btn cancel' onClick={closeForm}>Cancel</button>
            <button type="submit">Add</button>
        </form>
      </div>

    </>
  )
}
export default AddQuestion;