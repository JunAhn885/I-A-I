import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import axios from 'axios';

const serverUrl = 'http://localhost:8080';
const calendarEndpoint = `${serverUrl}/bonding-journal`;
const emotionPostEndpoint = `${serverUrl}/emotion-post`;
const GratitudePostEndpoint = `${serverUrl}/gratitude-post`;

const getBJPosts = (date) => axios.get(`${calendarEndpoint}/getPost`, {date:date});

const addEmotionPost = (date, type, content, emotion) => axios.post(`${emotionPostEndpoint}/addPost`, {data:date, type:type, content:content, emotion:emotion});

const addGratitudePost = (date, type, content) => axios.get(`${GratitudePostEndpoint}/addPost`, {date:date, type:type, content:content});

const UserService = {
  getBJPosts,
  addEmotionPost,
  addGratitudePost,
};

export default UserService;