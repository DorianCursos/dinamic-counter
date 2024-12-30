import styled from 'styled-components';

const StyledCounter = styled.h2`
	color: ${({ $counter }) =>
		$counter !== 0 && $counter % 2 === 0 ? 'red' : 'inherit'};
`;

export { StyledCounter };
