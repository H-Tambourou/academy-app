import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import questionService from '../services/question';

const Question = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [newQuestion, setNewQuestion] = useState<string>("");
  
  const closeForm = () => {
    setShowForm(false);
  }

  const handleNewQuestion = async(e: any) => {
    e.preventDefault();
    const data = {
      "title": newQuestion,
      "creationCode": "General"
    };

    try {
      const res = await questionService.addQuestion(data);
      console.log(res)
      if (res.status === 201) {
        setShowForm(false);
      } 
    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <>
      <div className="addGroup">
        <BiAddToQueue onClick={() => setShowForm(true)} className='addGroup-Icon' style={{width:"40px", height:"40px", cursor:"pointer"}} />
        <span>Add a question</span>
      </div>
      <div className={`form-wrapper ${showForm}`}>
        <form className="form" onSubmit={handleNewQuestion}>
            <h2>Add question</h2>
            <input type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} placeholder="Enter question..." required />
            <div className="btn-group">
              <button type="button" className="btn cancel" onClick={closeForm}>Cancel</button>
              <button type="submit" className="btn">Submit</button>
            </div>
        </form>
      </div>

    </>
  )
}
export default Question;