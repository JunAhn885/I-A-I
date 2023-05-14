import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import axios from 'axios';

const serverUrl = 'http://localhost:8080/api';

const calendarEndpoint = `${serverUrl}/bonding-journal`;
const emotionPostEndpoint = `${serverUrl}/emotion-post`;
const GratitudePostEndpoint = `${serverUrl}/gratitude-post`;

// /posts are for bonding journal 
const getBJPosts = (year, month, day) => axios.get(`${serverUrl}/posts?year=${year}&month=${month}&day=${day}`);

const addEmotionPost = (date, type, content, emotion) => axios.post(`${serverUrl}/posts/add-post`, {date:date, type:type, content:content, emotion:emotion});

const addGratitudePost = (date, type, content) => axios.post(`${serverUrl}/posts/add-post`, {date:date, type:type, content:content});

// / /events are for family log
const addLog = (date, eventName, location, notes) => axios.post(`${serverUrl}/events/add-log`, {date: date, eventName: eventName, location: location, notes: notes});

const getLog = (month) => axios.get(`${serverUrl}/events/?month=${month}`);

const UserService = {
  getBJPosts,
  addEmotionPost,
  addGratitudePost,
  addLog,
  getLog
};

export default UserService;
