import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import Technologies from "../views/Technologies";
import About from "../views/About";
import Contact from "../views/Contact";

//Icons
import {} from "@fortawesome/free-solid-svg-icons";
import { faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faJava, faJs);

//Images
import bu from "../images/bu.png";
import uos from "../images/uos.png";
import jp from "../images/jp.jpg";
import adyen from "../images/adyen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsWrapper = styled.div`
	${tw`flex flex-wrap justify-between mt-8`};
	display: grid;
	grid-gap: 4rem;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 1200px) {
		grid-gap: 3rem;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}
`;

const AboutHero = styled.div`
	${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
	${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
	${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
	${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
	${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
	${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
	<>
		<Layout />
		<Parallax pages={getOffset(7.5)}>
			<Hero offset={getOffset(0.2)}>
				<BigTitle>
					Hello, <br /> I'm Greg Mitten.
				</BigTitle>
				<Subtitle>
					I'm an ardent Software Engineer who's been accruing technical skills
					for over 7 years and I'm ready to put them to use to solve your
					business problems.
				</Subtitle>
			</Hero>
			<Projects offset={getOffset(2)}>
				<Title>Passion Projects</Title>
				<ProjectsWrapper>
					<ProjectCard
						title="TIDE"
						link="https://tmrow.com"
						bg="linear-gradient(90deg, rgba(179,1,21,1) 0%, rgba(255,108,61,1) 100%);"
						technologies="Node.js, ReactJS, WebSockets, Compilers"
					>
						I built an Integrated Development Environment for Tomorrow's new
						mobile application. Reducing barriers for all volunteer engineers to
						contribute their highly demanded technical skills to climate change,
						one of the most pressing issues of our time.
					</ProjectCard>
					<ProjectCard
						title="JeSSE"
						link=""
						bg="linear-gradient(90deg, rgba(255,108,61,1) 0%, rgba(255,203,36,1) 100%);"
						technologies="JavaScript, Compilers, Babel"
					>
						Using the techniques I learnt during the development of TIDE, I will
						be extracting and adapting a JavaScript Comparison engine that uses
						compiler technology to compare the similiarities of JavaScript
						expressions, functions or even whole modules! This engine has been
						evaluated to perform better than many industry standards in many
						circumstances.
					</ProjectCard>
				</ProjectsWrapper>
				<Title>Independent Contracting</Title>
				<ProjectsWrapper>
					<ProjectCard
						title="Catalyst"
						link="https://catalystpf.co.uk/"
						bg="linear-gradient(90deg, rgba(113,4,171,1) 0%, rgba(36,101,255,1) 100%);"
						technologies="Java, Spring, API, AngularJS, MySQL, AWS"
					>
						I worked over 2 contracts to build a large scale data retrieval web
						application for Catalyst. Providing data that's unavailable to their
						competitors a huge advantage.
					</ProjectCard>
					<ProjectCard
						title='Forum "Webscraper"'
						link=""
						bg="linear-gradient(90deg, rgba(36,101,255,1) 0%, rgba(36,245,255,1) 100%);"
						technologies="Java"
					>
						Commissioned by researchers at Bournemouth University, Using an
						intelligent Software architecture my design uses the same code with
						slight configuration changes to fetch data from over 20 heterogenous
						sites.
					</ProjectCard>
				</ProjectsWrapper>
				<Title>Projects I've Lead</Title>
				<ProjectsWrapper>
					<ProjectCard
						title="UK House price heatmap"
						link="https://github.com/Gregam3/UKHousePriceHeatMap"
						bg="linear-gradient(90deg, rgba(17,85,3,1) 0%, rgba(0,176,16,1) 100%);"
						technologies="Java, ReactNative, API, Docker, TravisCI, MySQL, AWS"
					>
						I lead a team developing an application that fetches, transforms and
						displays all UK houseprice data over the last 15 years. Even
						grouping data based on geolocation data
					</ProjectCard>
					<ProjectCard
						title="Tempus"
						link="https://github.com/ASEGroup1/Tempus"
						bg="linear-gradient(90deg, rgba(0,176,16,1) 0%, rgba(0,255,117,1) 100%);"
						technologies="Scala, Play, ReactJS, API, MySQL, AWS, Docker, TeamCity, DSL, Compilers "
					>
						Tempus is a customisable timetabler with a custom compiled Domain
						Specific Language. It's simple, you write constraints i.e. nothing
						scheduled after 5pm and/or all rooms must have disabled access and
						then our SAT solver gets to work calculating whether or not if a
						timetable can be produced and if it can providing you it.
					</ProjectCard>
				</ProjectsWrapper>
			</Projects>
			<Technologies offset={1}>
				<Title>Skills</Title>
				<br />
				<h1 style={{ color: "white" }}>
					<span>
						<FontAwesomeIcon icon={["fab", "java"]} style={{ fontSize: 100 }} />
						&nbsp; Java
					</span>
					<span>
						<FontAwesomeIcon icon={["fab", "js"]} style={{ fontSize: 100 }} />
						&nbsp; JavaScript
					</span>
				</h1>
			</Technologies>
			<About offset={getOffset(4)}>
				<Title>Company Experience</Title>
				<AboutHero>
					<Avatar src={adyen} alt="John Doe" />
					<AboutSub>Adyen - Current</AboutSub>
				</AboutHero>
				<AboutDesc>
					I will start work as a Developer at Adyen on the 16th of September
					2019
				</AboutDesc>
				<AboutHero>
					<Avatar src={jp} alt="John Doe" />
					<AboutSub>JPMorgan Chase {"&"} Co - 1 Year</AboutSub>
				</AboutHero>
				<AboutDesc>
					During my time at JPMC, I worked as a Technical Analyst Placement
					Intern; I was on a small agile team building a RESTful API platform
					that manages a patented automated regression workflow. This automated
					system reduced the work of testers from weeks to hours. Additionally,
					I independently reduced the workload of another team via the
					automation of many manual tasks.
				</AboutDesc>
				<Title>Education</Title>
				<AboutHero>
					<Avatar src={uos} alt="John Doe" />
					<AboutSub>University of Sussex - Current</AboutSub>
				</AboutHero>
				<AboutDesc>
					<b>Advanced Computer Science MSc</b> - Achieved a{" "}
					<span style={{ fontStyle: "italic" }}>First class with honours</span>{" "}
					and received the highly scarce{" "}
					<span style={{ fontStyle: "italic" }}>
						Chancellor's Scholarship for Academic Excellence
					</span>
				</AboutDesc>
				<AboutHero>
					<Avatar src={bu} alt="John Doe" />
					<AboutSub>Bournemouth University - 3 Years</AboutSub>
				</AboutHero>
				<AboutDesc>
					<b>Software Engineering BSc</b> - a First class with honours
				</AboutDesc>
			</About>
			<Contact offset={getOffset(5.2)}>
				<Inner>
					<Title>Hire Me</Title>
					<ContactText>
						<a href="mailto:gregoryamitten@gmail.com">Email me</a> or find me on{" "}
						<a href="https://github.com/Gregam3">GitHub</a> &{" "}
						<a href="https://www.linkedin.com/in/gregory-mitten-5a0a06106/">
							LinkedIn
						</a>
						. I'm open to discuss contracts, consultation free of charge.
					</ContactText>
				</Inner>
			</Contact>
		</Parallax>
	</>
);

const getOffset = (v, b) => {
	//Node throws an error when building unless this line is present
	if (typeof window === "undefined") return 0;

	const bigScreen = window.innerHeight > 600;

	if (b === undefined) console.log(getOffset(v, false));
	if (bigScreen && v < 1) return 0;
	if (!bigScreen && v === 1) return 3;
	if (!bigScreen || window.innerWidth < 400) return v * 2;
	return v;
};

export default Index;
