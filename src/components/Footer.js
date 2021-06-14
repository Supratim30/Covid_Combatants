import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		Covid Combatants
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Supratim</Heading>
			<FooterLink href="https://www.linkedin.com/in/supratim-majumder-53942a143/"><AiFillLinkedin /> Linkedin</FooterLink>
			<FooterLink href="https://github.com/Supratim30"><AiFillGithub /> Github</FooterLink>
		</Column>
		<Column>
			<Heading>Mayank</Heading>
			<FooterLink href="#"><AiFillLinkedin /> Linkedin</FooterLink>
			<FooterLink href="#"><AiFillGithub /> Github</FooterLink>
			{/* <FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink> */}
		</Column>
		<Column>
			<Heading>Krishna</Heading>
			<FooterLink href="#"><AiFillLinkedin /> Linkedin</FooterLink>
			<FooterLink href="#"><AiFillGithub /> Github</FooterLink>
			{/* <FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}
		</Column>
		<Column>
			<Heading>Abhay</Heading>
			<FooterLink href="#"><AiFillLinkedin /> Linkedin</FooterLink>
			<FooterLink href="#"><AiFillGithub /> Github</FooterLink>
			{/* <FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink> */}
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
