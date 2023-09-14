"use client";
import Footer from "@/components/footer/Footer";
import UserNavbar from "@/components/userNavbar/userNavbar";
import styled from "styled-components";
import PrenumationButton from "@/components/prenumationButton/prenumationButton";
import { supabase } from "../../../supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  margin-top: 64px;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Start() {
  const router = useRouter();
  useEffect(() => {
    const checkUserSession = async () => {
      const session = supabase.auth.getSession();
      if (session) {
        console.log((await session).data);
        if ((await session).data.session == null) {
          router.push("/login");
        }
      }
    };
    checkUserSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  return (
    <Main>
      <UserNavbar></UserNavbar>
      <Section>
        <Heading>Lägg till en prenumation för att komma igång!</Heading>
        <ImageDiv>
          <Logo src="arrow.svg"></Logo>
        </ImageDiv>
        <ButtonDiv>
          <PrenumationButton
            href="/subscription"
            text="Lägg till prenumation"
          ></PrenumationButton>
        </ButtonDiv>
        <button onClick={handleLogout}>Logout</button>
      </Section>
      <Footer></Footer>
    </Main>
  );
}
