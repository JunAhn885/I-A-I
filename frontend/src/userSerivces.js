import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import axios from 'axios';

const serverUrl = 'http://localhost:8080/api';

const calendarEndpoint = `${serverUrl}/bonding-journal`;
const emotionPostEndpoint = `${serverUrl}/emotion-post`;
const GratitudePostEndpoint = `${serverUrl}/gratitude-post`;

const getBJPosts = (date) => axios.get(`${serverUrl}/posts?date=${date}`);

const addEmotionPost = (date, type, content, emotion) => axios.post(`${serverUrl}/posts/add-post`, {date:date, type:type, content:content, emotion:emotion});

const addGratitudePost = (date, type, content) => axios.post(`${serverUrl}/posts/add-post`, {date:date, type:type, content:content});

const addLog = (date, eventName, location, notes) => axios.post(`${serverUrl}/posts/add-log`, {date: date, eventName: eventName, location: location, notes: notes});

const UserService = {
  getBJPosts,
  addEmotionPost,
  addGratitudePost,
  addLog
};

export default UserService;
