"use client"
import Link from "next/link";
import styled from 'styled-components';

const FooterSection= styled.footer`
  background-color: #000000;
  height: 240px;
  justify-content: space-between;
  align-items: center;
  color:white;
  width: 100%;
 
`;

const Logo = styled.img`
    height: 36px;
    width: 36px;
`;

const FooterDiv = styled.div`

 display: flex;
 flex-direction:column;

 justify-content: space-between;
 padding: 20px;

 
`;





const LowerDiv= styled.div`
  p {
    margin: 0;
  }
`;

export default function Footer () {
    return (
        <FooterSection>
        <Logo src="footer-logo.svg"></Logo>
        <FooterDiv>
        <p>Kontakta oss</p>
        <p>FAQ</p>
        <Link href = "./userterms">Användarvillkor</Link>
       <p>Integritetspolicy</p>
       </FooterDiv>
       <LowerDiv>
            <p>© Submind 2023.</p>
        </LowerDiv>
        </FooterSection>
    )
}