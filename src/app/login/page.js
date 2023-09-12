"use client"
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { useState } from 'react';
import { supabase } from '../../../supabase';
import Link from 'next/link';
import styled from "styled-components";
import { useRouter } from 'next/navigation'

const Main = styled.div`
  background-color: white;
  height: 850px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;
  color: black;
  height: 100vh;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 24px;
    border-bottom: 3px solid #EDEDED;
  }
  form input{
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #EDEDED;
    box-sizing: border-box;
    padding-left: 16px;
  }
  form button{
    box-sizing: border-box;
    width: 100%;
    padding: 8px 0;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 10px;
    height: 40px;
  }
  h1{
    font-weight: 400;
  }
  h3{
    font-size: 16;
    font-weight: 200;
    width: 100%;
    text-align: center;
  }
  h3 a{
    border-bottom: 1px solid black;
  }
`;


function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      
      if (error) {
        throw error;
      }
      
      console.log('Logged in:', data);
      router.push("/start");
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <Main>
    <Navbar></Navbar>
    <Section>
      <h1>Logga in</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input placeholder='Email adress' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input
            placeholder='Lösenord'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Logga in</button>

        </form>
        <h3>Ny användare? <Link href= "/register">Skapa konto här</Link></h3>
    </Section>
    <Footer></Footer>
    </Main>
  );
}

export default LoginPage;
