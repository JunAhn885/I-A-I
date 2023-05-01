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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="emotion-post" element={<EmotionPost pageName="Emotion Post" name="John"/>} />
        <Route path="gratitude-post" element={<GratitudePost pageName="Gratitude Post" name="John"/>} />
        <Route path="bonding-journal" element={<BondingJournal/>} />
        <Route path="family-log" element={<FamilyLog />} />
        <Route path="edit-log" element={<EditLog />} />
        <Route path="add-log" element={<AddLog />} />
      </Routes>
    </div>
    );
}
export default App;
