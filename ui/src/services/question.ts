import axios from 'axios';

const addQuestion = async (data: any) => {
  const response = await axios.post("/api/createNewQuestion", data);
  return response;
};

const questionService = {
  addQuestion
};

export default questionService;