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

function Prenumation(){


    return (

        <Main>
    <Navbar></Navbar>
    <Section>
        <h2>Lägg till prenumation</h2>
        <StreamingForm></StreamingForm>
    </Section>
    <Footer></Footer>
    </Main>
    )
}


export default Prenumation;