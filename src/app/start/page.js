"use client"
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import styled from "styled-components";
import PrenumationButton from '@/components/prenumationButton/prenumationButton';

const Main = styled.div`
  background-color: white;
  height: 850px;
`;
const Logo = styled.img`
height: 116px;
width: 88px;
`;

const Section = styled.section`
  height: 540px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  
`;

const Heading = styled.h2 `
font-size: 24px;
font-weight: 300;
text-align: center;
margin-top: 64px;
`

const ImageDiv = styled.div `
display:flex;
justify-content:center;
align-items: center;
margin-top: 48px;
margin-bottom: 48px;
`

const ButtonDiv = styled.div `
display:flex;
align-items:center;
justify-content:center;
`
export default function Start() {
    return (
        <Main>
            <Navbar></Navbar>
            <Section>
    
                <Heading>Lägg till en prenumation för att komma igång!</Heading>
                <ImageDiv>
                <Logo src = "arrow.svg"></Logo>
                </ImageDiv>
                <ButtonDiv>
                <PrenumationButton href = "" text = "Lägg till prenumation"></PrenumationButton>
                </ButtonDiv>
            
            
            </Section>
            <Footer></Footer>
            </Main>
    )
}
