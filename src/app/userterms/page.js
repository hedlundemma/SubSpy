"use client"
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import styled from "styled-components";


const Main = styled.div`
  background-color: white;
  height: 1050px;
`;

const Section = styled.section`

  height: 740px;
  
  padding: 16px;
 
  display: flex;
  flex-direction: column;
  
`;

export default function userTerms (){

    return(
        <Main>
        
            <Navbar></Navbar>
            <Section>
        <div>
        <Link href ="/register">Gå tillbaka</Link>
        <h2>Användarvillkor</h2>
        <p>Sit aliquam dolor eget arcu neque nisl. Malesuada aliquam odio fusce purus dignissim. Posuere eleifend a at cursus auctor tortor ipsum libero convallis. Mauris enim eu ut habitasse convallis vestibulum euismod. Non iaculis viverra dictum in sed ac non.
Dolor proin est aenean turpis risus. Orci etiam eget condimentum bibendum nisl odio orci enim ac. Feugiat ut facilisis ullamcorper in cursus imperdiet sit phasellus porttitor. Id nunc proin euismod neque tellus risus turpis lectus vel. Tellus diam luctus aenean quis nullam sit risus. Nec eu tempus odio quam in erat justo praesent pe. Sit aliquam dolor eget arcu neque nisl. Malesuada aliquam odio fusce purus dignissim. Posuere eleifend a at cursus auctor tortor ipsum libero convallis. Mauris enim eu ut habitasse convallis vestibulum euismod. Non iaculis viverra dictum in sed ac non.
Dolor proin est aenean turpis risus. Orci etiam eget condimentum bibendum nisl odio orci enim ac. Feugiat ut facilisis ullamcorper in cursus imperdiet sit phasellus porttitor. Id nunc proin euismod neque tellus risus turpis lectus vel. Tellus diam luctus aenean quis nullam sit risus. Nec eu tempus odio quam in erat justo praesent pe</p>
        </div>
        </Section>
        <Footer></Footer>
        </Main>
    )
}