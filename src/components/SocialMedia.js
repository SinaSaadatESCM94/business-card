import React from "react";
import "./styles/SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitterSquare,
	faFacebookSquare,
	faInstagramSquare,
	faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia (props){
	return (
		<footer>
			<a href={props.links.twitter}>
				<FontAwesomeIcon icon={faTwitterSquare} className="icon" />
			</a>
			<a href={props.links.facebook}>
				<FontAwesomeIcon icon={faFacebookSquare} className="icon" />
			</a>
			<a href={props.links.instagram}>
				<FontAwesomeIcon icon={faInstagramSquare} className="icon" />
			</a>
			<a href={props.links.github}>
				<FontAwesomeIcon icon={faGithubSquare} className="icon" />
			</a>
		</footer>
	);
}
