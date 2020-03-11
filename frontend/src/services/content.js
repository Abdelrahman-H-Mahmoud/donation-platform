import axios from 'axios';

export function getAllContent (skip = 0, limit =0) {
    return axios.get('/content');
};