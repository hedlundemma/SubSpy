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
`

export default function StartPrenumation () {
    return (
        <Main>
            <Navbar></Navbar>
            <Section>
            <div>
                <Heading>Lägg till en prenumation för att komma igång</Heading>
                <Logo src = "arrow.svg"></Logo>
                <PrenumationButton href = "" text = "Lägg till Prenumation"></PrenumationButton>
            
            </div>
            </Section>
            <Footer></Footer>
            </Main>
    )
}
