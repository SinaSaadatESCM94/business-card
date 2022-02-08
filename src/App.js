import "./components/styles/App.css";
import IdElement from "./components/IdElement";
import TextElement from "./components/TextElement";
import SocialMedia from "./components/SocialMedia";
// import profilePicture
import image from "./components/images/profilePic.jpg";
// defining props to be passed
// IdElement
const info = {
	profilePic: image,
	firstName: "Sina",
	lastName: "Saadat",
	occupation: "Frontend Developer",
	webpageAddress: "https://sinasaadatescm94.github.io/resume/",
	linkedinAddress: "https://www.linkedin.com/in/sinasaadatescm94",
	emailAddress: "escm94.sinasaadat@gmail.com",
};
// TextElement
const articles = [
	{
		title: "About",
		content:
			"I am a self-taught Frontend Developer and I am learning new things day by day. I hope I become a great developer one day.",
	},
	{
		title: "Intrests",
		content:
			"I love pencil drawing and while I'm drawing time stops for me, I also love to learn Kyokushin and become a fighter one day but for now, I stick to web development!",
	},
];
// SocialMedia Links
const links = {
	twitter: "",
	facebook: "",
	instagram: "",
	github: "https://github.com/SinaSaadatESCM94",
};
function App (){
	return (
		<div className="card">
			<IdElement info={info} />
			<TextElement article={articles[0]} />
			<TextElement article={articles[1]} />
			<SocialMedia links={links} />
		</div>
	);
}

export default App;
