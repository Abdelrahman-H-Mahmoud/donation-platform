import axios from 'axios';

export async function getAllContent(skip = 0, limit = 10) {
    return axios.get(`/content`, { params: { skip, limit } });
};