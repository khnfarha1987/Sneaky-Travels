import styled from "styled-components";

export const ServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #2d3962;
	border-top: 5px white solid;
	border-bottom: 5px white solid;

	@media screen and (max-width: 985px) {
		height: 1200px;
	}

	@media screen and (max-width: 885px) {
		height: 1400px;
	}

	@media screen and (max-width: 480px) {
		height: 1400px;
	}
`;

export const ServicesWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		justify-content: space-evenly;
	}

	@media screen and (max-width: 768px) {
		justify-content: center;
		padding: 0 20px;
	}
`;

export const ServicesIcon = styled.img`
	height: 100px;
	width: auto;
	margin-bottom: 20px;
`;

export const ServicesH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 30px;
	margin-top: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ServicesH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const ServicesP = styled.p`
	font-size: 1rem;
	text-align: center;
	margin-bottom: 10px;
`;

export const btn = styled.b`
	background: #01bf71;
	padding: 5px 10px;
	border: none;
	border-radius: 10px;
	text-style: none;
	font-size: 12px;
	color: white;
`;
