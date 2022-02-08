import React from "react";
import "./styles/TextElement.css";

export default function TextElement (props){
	return (
		<div className="text-container">
			<h2>{props.article.title}</h2>
			<p>{props.article.content}</p>
		</div>
	);
}
