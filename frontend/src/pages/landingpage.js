import Box1 from '../components/landingpage/box1'
import Box2 from '../components/landingpage/box2'
import Box3 from '../components/landingpage/box3'
import Header from '../components/landingpage/header'
import Footer from '../components/landingpage/footer'

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Header/>
<<<<<<< HEAD
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
        <Box1/>
        <Box2/>
        <Box3/>
      </div>
=======
      <Box1/>
      <Box2/>
      <Box3/>
      <Footer/>
>>>>>>> bca2192d663465d61be452b500d248c053cbae28
    </div>
  );
}