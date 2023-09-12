"use client"
import { useState } from 'react';
import { supabase } from '../../../supabase';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import styled from "styled-components";

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

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Registration error:', error.message);
      } else {
        console.log('Registration successful:', user);
      }
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  return (
    <Main>
      <Navbar></Navbar>
      <Section>
    <div>
      <h2>Registrera dig</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Lösenord:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <h3> Jag godkänner <Link href ="/userterms">Användarvillkoren</Link></h3>
        <button type="submit">Skapa konto</button>
      </form>

      <h3>Har du redan ett konto? <Link href="/login">
       Logga in här
      </Link></h3>
    </div>
    </Section>
    <Footer></Footer>
    </Main>
  );
}