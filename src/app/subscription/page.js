"use client"
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { supabase } from '../../../supabase';
import styled from "styled-components";
import StreamingForm from '@/components/streamingForm/StreamingForm';


const Main = styled.div`
  background-color: white;
  height: 830px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 525px;
  `

  const Heading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-top: 52px;
  margin-left: 27px;
  `

function Subscription(){


    return (

        <Main>
    <Navbar></Navbar>
    <Section>
        <Heading>Lägg till prenumeration</Heading>
        <StreamingForm></StreamingForm>
    </Section>
    <Footer></Footer>
    </Main>
    )
}


export default Subscription;