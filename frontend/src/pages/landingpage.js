import Box1 from '../components/landingpage/box1'
import Box2 from '../components/landingpage/box2'
import Box3 from '../components/landingpage/box3'
import Header from '../components/landingpage/header'
import AboutUs from '../components/landingpage/aboutUs'

//need to add about us and meet the team
export default function LandingPage() {
  const team = [
    {
      image:"./images/member_headshots/Jun.jpeg",
      name:"Jun Ahn",
      role: "Developer",
      linkedIn:"https://www.linkedin.com/in/junahn2/"
    },
    {
      image:"./images/member_headshots/Matthew.jpg",
      name:"Matthew Khoo",
      role:"Developer",
      linkedIn:"https://www.linkedin.com/in/matthew-khoo-2b347522a/"
    },
    {
      image:"./images/member_headshots/Helen.jpg",
      name:"Helen Li",
      role:"Developer",
      linkedIn:""
    },
    {
      image:"./images/member_headshots/Allen.jpg",
      name:"Allen Liu",
      role:"Poduct Manager",
      linkedIn:"https://www.linkedin.com/in/xu-liu-644666225/"
    },
    {
      image:"",
      name:"Yuemin Cao",
      role:"UX Designer",
      linkedIn:""
    }
]
  
  const aboutUs = team.map(member => {
    return <AboutUs image={member.image} name={member.name} role={member.role} linkedIn={member.linkedIn}/>
  })

  return (
    <div className="LandingPage">
        <Header/>
        <div className="Landingpage-textbox" style={{marginTop: "12%", alignItems:"center"}}>
          <h1>About Us</h1>
          <p>It is common that when couples become parents for the first time their relationship experiences more strain and stress as they navigate new challenges. 
            Our project is centred around growing stronger bonds within young families by improving communication between partners and bringing into the spotlight 
            memorable experiences. Our solution creates a fun experience for couples to share and record memories so that their relationship continues to grow alongside their child. </p>
        </div>
        <Box1/>
        <Box2/>
        <Box3/>
        <div className="about-us">
          <h1 className="title">Meet Our Team</h1>
          <div className="member-section">
            {aboutUs}
          </div>
        </div>
    </div>
  );
}