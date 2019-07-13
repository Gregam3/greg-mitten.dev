import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { width as twWidth, colors } from "../../tailwind";
import { hidden } from "../styles/utils";

const Wrapper = styled.svg`
	${tw`absolute`};
	stroke: currentColor;
	${props => props.hiddenMobile && hidden};
	color: ${props => props.stroke};
	width: ${props => props.svgWidth};
	fill: ${props => props.fill};
	left: ${props => props.left};
	top: ${props => props.top};
`;

const icons = {
	triangle: {
		shape: (
			<text x="0" y="15">
				{"λ"}
			</text>
		),
		viewBox: "0 0 30 30"
	},
	circle: {
		shape: (
			<text x="0" y="15">
				{"</>"}
			</text>
		),
		viewBox: "0 0 30 30"
	},
	arrowUp: {
		shape: (
			<text x="0" y="15">
				{"∅"}
			</text>
		),
		viewBox: "0 0 30 50"
	},
	upDown: {
		shape: (
			<text x="0" y="15">
				{";"}
			</text>
		),
		viewBox: "0 0 30 80"
	},
	box: {
		shape: (
			<text x="0" y="15">
				{"∑"}
			</text>
		),
		viewBox: "0 0 30 30"
	},
	hexa: {
		shape: (
			<text x="" y="15">
				{"{}"}
			</text>
		),
		viewBox: "0 0 30 60"
	},
	cross: {
		shape: (
			<text x="0" y="15">
				{"&&"}
			</text>
		),
		viewBox: "0 0 100 100"
	}
};

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
	<Wrapper
		viewBox={icons[icon].viewBox}
		stroke={stroke}
		fill={fill}
		svgWidth={twWidth[`${width}`]}
		left={left}
		top={top}
		hiddenMobile={hiddenMobile}
	>
		{icons[icon].shape}
	</Wrapper>
);

export default SVG;

SVG.propTypes = {
	stroke: PropTypes.string,
	fill: PropTypes.string,
	width: PropTypes.number,
	icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
	left: PropTypes.string,
	top: PropTypes.string,
	hiddenMobile: PropTypes.bool
};

SVG.defaultProps = {
	stroke: "transparent",
	width: 8,
	fill: "none",
	left: "0%",
	top: "0%",
	hiddenMobile: false
};
