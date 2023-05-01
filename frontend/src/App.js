import './App.css';
import LandingPage from './pages/landingpage';
import Login from './pages/login';
import EmotionPost from './pages/emotionPost';
import GratitudePost from "./pages/gratitudePost"
import BondingJournal from './pages/bondingJournal';
import  {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="emotion-post" element={<EmotionPost pageName="Emotion Post" name="John"/>} />
        <Route path="gratitude-post" element={<GratitudePost pageName="Gratitude Post" name="John"/>} />
        <Route path="bonding-journal" element={<BondingJournal/>} />
      </Routes>
    </div>
    );
}
export default App;
