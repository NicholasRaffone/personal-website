import {useEffect} from 'react'
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    AOS.init();
  },[])
  return <Component {...pageProps} />
}
export default App