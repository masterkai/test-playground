import React from "react";
import PullToRefresh from "../components/PullToReflash";
import styled from "styled-components";
import { ReactFitty } from "react-fitty";

export const PullToRefreshPage = () => {
	return (
		<div>
			<Header>
				<TextStyled>Fat headline!</TextStyled>
			</Header>
			<PullToRefresh />
		</div>
	);
};

const Header = styled.header`
	display: block;
	background-color: bisque;
	height: max-content;
`;

const TextStyled = styled(ReactFitty)`
	color: red;
	text-decoration: underline;
`;
