import styled from 'styled-components';

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #2D3962;
    opacity:0.9;
    border-top: 5px white solid;
    border-bottom: 5px white solid;
    //background: url(https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80);
    // background-repeat: no-repeat;
    // background-size: cover;

		@media screen and (max-width: 985px) {
        height: 1200px;
    }

    @media screen and (max-width: 885px) {
        height: 1400px;
    }

    @media screen and (max-width : 480px) {
        height: 1400px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 200px;
    margin: 0 10px 64px 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height:100px;
    width: Auto;
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
    margin-bottom:10px;
`;


export const btn = styled.b`
    background: #01bf71;
    padding: 5px 10px;
    border: none;
    border-radius: 10px
    text-style:none;
    font-size:12px;
    color: white;


`;