import './App.css'
import { ThemeProvider } from "./components/theme-provider"

import Header from "./components/header"
import {gameIds} from "./gameIds"
import Gamecard from './components/ui/Gamecard'
import { Fade } from "react-awesome-reveal";
import 'animate.css';

import Footer from "./components/footer"
import {ScrollToTop} from "./components/ScrollToTop"

interface Props{
    Name:string,
    Title:string,
    Src:string,
    HRef:string,
}
function Card(props:Props){
    return (
        <>
        <a className='text-center justify-center items-center' href={props.HRef}>
            <h1 className='font-bold text-2xl'>{props.Name}</h1>
            <h2 className='font-light'>{props.Title}</h2>
            <img className='w-[240px] mt-5 rounded-full' src={props.Src}></img>
        </a>
        </>
    )
}

export default function(){
    return (
        <>
            <ThemeProvider>
                <ScrollToTop></ScrollToTop>
                <Header/>

                <section className="flex flex-col text-center justify-center items-center pt-[10%] relative">
                    <div
                        className="fixed w-1/2  inset-0 scale-300 rotate-45 -z-10 brightness-40 hidden dark:block bg-slate-500 overflow-hidden
                                        bg-[linear-gradient(0deg,_#e5e7eb_1px,_transparent_1px),linear-gradient(90deg,_#e5e7eb_1px,_transparent_1px)]
                                        [background-size:64px_64px]"
                            style={{
                                WebkitMaskImage:
                                'radial-gradient(ellipse at left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskSize: '100% 100%',
                                maskImage:
                                'radial-gradient(ellipse at left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))',
                                maskRepeat: 'no-repeat',
                                maskSize: '100% 100%',
                        }}
                    />
                    
                    <h1 className='text-4xl md:text-6xl font-bold mb-5 animate__animated animate__fadeInDown'>Our Team</h1>
                    <h2 className='mb-10'>Meet the talented developers who make it all possible.</h2>
                    <Fade>
                        <div className='flex gap-5 animate__animated animate__zoomIn'>
                            <Card Name='Andy' Title='Founder' Src='https://www.levelupgames.fun/wp-content/uploads/go-x/u/dd52c2b8-2d68-4fb2-b881-3e56c9c2b46c/l0,t392,w1080,h1080/image-240x240.jpg' HRef='https://www.roblox.com/users/2888174376/profile'></Card>
                            <Card Name='Justin' Title='Founder' Src='https://www.levelupgames.fun/wp-content/uploads/go-x/u/55086f50-180c-49a0-ad53-5b928cc6292a/l0,t0,w1024,h1024/image-320x320.png' HRef='https://www.roblox.com/users/1056298865/profile'></Card>
                            <Card Name='You?' Title='Game Developer' Src='https://www.levelupgames.fun/wp-content/uploads/go-x/u/d0ce527a-f8b1-4d91-9be5-69b445259d75/l0,t0,w600,h600/image-240x240.png' HRef='https://www.roblox.com/User.aspx?lD='></Card>
                        </div>
                        

                        <h2 className='mt-10 text-2xl w-[50%] mx-auto'>"At LevelUp! Games we strive to create fun, unique and creative experiences on the ROBLOX platform. We strive to deliver only the highest quality work."</h2>
                        <h3 className='text-xl font-light'>- Andy, Founder</h3>
                    </Fade>
                </section>
                
                <div className='mt-52'></div>
                <Footer></Footer>
            </ThemeProvider>
        </>
    )
}