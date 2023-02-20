import styled from 'styled-components';

export const StyledAboutImg = styled.img.attrs({
	className: 'w-full h-[425px] mb-[100px]',
})`
	height: ${(props) => (props.height ? props.height : '425px')};
`;
export const StyledAboutTitle = styled.h2.attrs({
	className:
		'mb-[48px] font-bold text-[32px] leading-8 text-center text-neutral-700',
})``;
export const StyledAboutText = styled.p.attrs({
	className: 'text-lg leading-6 mb-[48px]',
})``;
