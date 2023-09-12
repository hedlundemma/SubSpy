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

  height: 540px;
  
  padding: 16px;
 
  display: flex;
  flex-direction: column;
  
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
      router.push("/home");
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <Main>
    <Navbar></Navbar>
    <Section>
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>

        <h3>Ny användare?<Link href= "/registration">Skapa konto här</Link></h3>
      </form>
    </div>
    </Section>
    <Footer></Footer>
    </Main>
  );
}

export default LoginPage;
