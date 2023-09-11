"use state";

import Link from 'next/link';
export default function Home() {
  return (
    <main>
       <Link href="/login">
       Logga in
      </Link>
      <Link href = "/registration">
        Registrera dig
      </Link>
     
      </main>
  )
}
