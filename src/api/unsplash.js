import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xNweoPKBDcBpEjOCCqkcic_r1UciLHk9TsQoSO3JMkA"
  }
});
