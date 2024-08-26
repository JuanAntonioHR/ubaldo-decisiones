'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('pages/question-form')
  }
  , []);

  return (
    <></>
  );
}

export default Page;