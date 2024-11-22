import axios from 'axios';
import { useState } from 'react';

const useGetAll = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUser(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, setUser, fetchData };
};

export default useGetAll;
