import Box1 from '../components/landingpage/box1'
import Box2 from '../components/landingpage/box2'
import Box3 from '../components/landingpage/box3'
import Header from '../components/landingpage/header'
import AboutUs from '../components/landingpage/aboutUs'

//need to add about us and meet the team
export default function LandingPage() {
  return (
    <div className="LandingPage">
        <Header/>
        <Box1/>
        <Box2/>
        <Box3/>
        <AboutUs/>
    </div>
  );
}