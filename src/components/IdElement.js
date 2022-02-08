import React from "react";
import "./styles/IdElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function IdElement (props){
	return (
		<section className="id--info">
			<div className="img-container">
				<img src={props.info.profilePic} alt="profile" />
			</div>
			<div className="id-container">
				<h1>
					{props.info.firstName}
					<span> </span>
					{props.info.lastName}
				</h1>
				<h2>{props.info.occupation}</h2>
				<h3>
					<a href={props.info.webpageAddress}>
						{props.info.firstName}
						{props.info.lastName}.website
					</a>
				</h3>
			</div>
			<div className="btn-container">
				<a href={props.info.emailAddress} className="email">
					<FontAwesomeIcon icon={faEnvelope} className="icon" />
					<p>Email</p>
				</a>
				<a href={props.info.linkedinAddress} className="linkedIn">
					<FontAwesomeIcon icon={faLinkedin} className="icon" />
					<p>LinkedIn</p>
				</a>
			</div>
		</section>
	);
}
