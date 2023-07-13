
import { useRouter } from "next/router";
import {useEffect} from 'react';
import Link from "next/link";


export default function Error() {
 const router = useRouter();
 useEffect(()=>{
  setTimeout(()=>{
    router.push('/');
  }, 3000)
 },[])
  return (
  
    <div class="container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link href="/" className="text-accent">Go back to the home page</Link>
    </div>
  )
}
