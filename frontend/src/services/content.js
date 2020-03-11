import axios from 'axios';

export async function getAllContent (skip = 0, limit =0) {
    return axios.get('/content');
};