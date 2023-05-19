import './App.css';
import LandingPage from './pages/landingpage';
import Login from './pages/login';
import EmotionPost from './pages/emotionPost';
import GratitudePost from "./pages/gratitudePost"
import BondingJournal from './pages/bondingJournal';
import AddLog from "./components/FamilyLog/AddLog";
import EditLog from "./components/FamilyLog/EditLog";
import FamilyLog from "./components/FamilyLog/FamilyLog";
import  {Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  // state management for calendar dates
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("John");

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="login" element={<Login setName={setName} name={name}/>}/>
        <Route path="emotion-post" element={<EmotionPost value={date} pageName="Emotion Post" name={name}/>} />
        <Route path="gratitude-post" element={<GratitudePost value={date} pageName="Gratitude Post" name={name}/>} />
        <Route path="bonding-journal" element={<BondingJournal value={date} setValue={setDate}/>} />
        <Route path="family-log" element={<FamilyLog />} />
        <Route path="edit-log" element={<EditLog />} />
        <Route path="add-log" element={<AddLog />} />
      </Routes>
    </div>
    );
}
export default App;
