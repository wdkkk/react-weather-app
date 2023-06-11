import axios from "axios";

const useFetch = async (url) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default useFetch;
