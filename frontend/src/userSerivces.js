import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import axios from 'axios';

const serverUrl = 'http://localhost:8080/api';

// posts for bonding journal 
const getBJPosts = (id, year, month, day) => axios.get(`${serverUrl}/posts?id=${id}&year=${year}&month=${month}&day=${day}`);

const addEmotionPost = (id, date, type, content, emotion) => axios.post(`${serverUrl}/posts/add-post`, {id: id, date:date, type:type, content:content, emotion:emotion});

const addGratitudePost = (id, date, type, content) => axios.post(`${serverUrl}/posts/add-post`, {id: id, date:date, type:type, content:content});

// events are for family log
const addLog = (id, date, eventName, location, notes) => axios.post(`${serverUrl}/events/add-log`, {id: id, date: date, eventName: eventName, location: location, notes: notes});

const getLog = (id, month, year) => axios.get(`${serverUrl}/events/?id=${id}&month=${month}&year=${year}`);

// add family handler 
const updateFamily = (id, userToAdd) => axios.put(`${serverUrl}/family/update-family`, {id: id, userToAdd: userToAdd})

const UserService = {
  getBJPosts,
  addEmotionPost,
  addGratitudePost,
  addLog,
  getLog,
  updateFamily
};

export default UserService;
