export default function TeamMemberCard({ name, img, job }) {
    return (
        <div style={{ border: "1px solid white", padding: "10px", textAlign: "center" }}>
            <h1>Hey, {name}</h1>
            <img src={img} alt={name} style={{ height: 250, width: 250, borderRadius: "50%" }} />
            <h3>{job}</h3>
        </div>
    );
}
