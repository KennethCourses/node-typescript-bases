import axios from 'axios';

export const axiosPlugin = {
    get: async (url: string) => {
        const response = await axios.get(url);
        return response.data;
    }
}