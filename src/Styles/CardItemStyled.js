import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	width: 230px;
	height: 350px;
	margin: 20px;
	flex-direction: column;
	background-color: #95dada;
	border: 1px solid grey;
	border-radius: 5px;
	padding: 25px;
	cursor: pointer;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform 0.25s ease-out;
	:hover {
		transform: scale(1.05);
	}
`;

const Content = styled.div`
	align-self: center;
`;

const CardItem = ({ children }) => (
	<Container>
		<Content>{children}</Content>
	</Container>
);

export default CardItem;
