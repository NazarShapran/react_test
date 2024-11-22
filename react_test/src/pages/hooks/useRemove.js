import axios from 'axios';


export const useRemove = (url) => {

    const remove = async (id) => {
        try {
            await axios.delete(`https://dummyjson.com/users/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return remove;
};
