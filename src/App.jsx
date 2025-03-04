import './App.css';
import TeamMemberCard from './components/TeamMemberCard';

function App() {
  let teamMembers = [
    { name: "John Doe", img: "https://avatarfiles.alphacoders.com/337/337251.jpg", job: "Software Dev" },
    { name: "Victoria LEE", img: "https://i.pinimg.com/736x/a8/a0/cd/a8a0cd3cbb13ff96d5bfca73b011a07d.jpg", job: "Design Lead" },
    { name: "John Snow", img: "https://i.pinimg.com/474x/39/2e/0f/392e0f462c42eff5c04a836ef86fa3ca.jpg", job: "Junior Dev"}
  ];

  return (
    <div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} name={member.name} img={member.img} job={member.job} />
      ))}
    </div>
  );
}

export default App;
