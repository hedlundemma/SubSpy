"use state";

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
       <Link href="/login">
       Logga in
      </Link>
      <Link href = "/registration">
        Registrera dig
      </Link>
     
      </main>
  )
}
