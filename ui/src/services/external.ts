import axios from 'axios';

const getIpAddress = async () => {
  const response = await axios.get('https://geolocation-db.com/json/');
  return response;
};

const externalService = {
  getIpAddress
};

export default externalService;
