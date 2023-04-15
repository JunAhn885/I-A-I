import axios from 'axios';

const serverUrl = 'http://localhost:8080';
const userEndpoint = `${serverUrl}/api`;



const addEvents = (title, location, description) => axios.post(`${userEndpoint}/`, { title:title, location:location, description:description });

const addPosts = (title, content, emoji) => axios.post(`${userEndpoint}/`, {title:title, content:content, emoji:emoji});

const getUsers = () => axios.get(`${userEndpoint}/`);

const UserService = {
  getUsers,
  addEvents,
  addPosts,
};

export default UserService;