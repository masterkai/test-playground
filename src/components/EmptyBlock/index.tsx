import styled from "styled-components";

interface IEmptyBlock {
	height: number;
	width?: string;
}

export default styled.div<IEmptyBlock>`
	display: block;
	padding: ${({ height }) => height / 2}px 0;
	width: ${({ width }) => (width ? width : "100%")};
`;
