import axios from 'axios';

const addQuestion = async (data: any) => {
  const response = await axios.post("/api/createNewQuestion", data);
  return response;
};

const getAllQuestions = async () => {
  const response = await axios.get("/api/getAllQuestions");
  return response.data;
}

const questionService = {
  addQuestion,
  getAllQuestions
};

export default questionService;