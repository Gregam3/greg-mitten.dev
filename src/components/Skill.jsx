import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.a`
	${tw`absolute`};
	stroke: currentColor;
	${props => props.hiddenMobile && hidden};
	color: ${props => props.stroke};
	width: ${props => props.svgWidth};
	fill: ${props => props.fill};
	left: ${props => props.left};
	top: ${props => props.top};
`;

const Text = styled.div`
	${tw`opacity-75 font-sans text-sm md:text-base`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Skill = ({ logo, name }) => (
	<Wrapper target="_blank" rel="noopener noreferrer" bg={bg}>
		<Text style={{ fontSize: 20 }}>{name}</Text>
		<Avatar src={logo} alt={name} />
	</Wrapper>
);

export default Skill;

Skill.propTypes = {
	logo: PropTypes.img,
	name: PropTypes.string
};
