import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	width: 100px;
	height: 150px;
	border: 3px solid ${(props) => props.color};
	border-radius: 15px;
	justify-content: space-around;
	font-size: 1rem;
	color: ${(props) => props.color};
`;

const Content = styled.div`
	align-self: center;
`;

const CardItem = ({ children, color = "#ff867c" }) => (
	<Container color={color}>
		<Content>{children}</Content>
	</Container>
);

export default CardItem;