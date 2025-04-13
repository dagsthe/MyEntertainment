import './App.css'
import { ThemeProvider } from "./components/theme-provider"

import Header from "./components/header"
import {gameIds} from "./gameIds"
import Gamecard from './components/ui/Gamecard'
import { Fade } from "react-awesome-reveal";
import 'animate.css';

import Footer from "./components/footer"
import {ScrollToTop} from "./components/ScrollToTop"

export default function(){
    return (
        <>
            <ThemeProvider>
                <ScrollToTop></ScrollToTop>
                <Header/>

                <section className="flex flex-col justify-center items-center pt-[10%] relative">
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
                    
                    <h1 className='text-4xl md:text-6xl font-bold mb-5 animate__animated animate__fadeInDown'>Our Experiences</h1>
                    <Fade>
                        <div className='m-10 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-[10%] animate__animated animate__zoomIn'>
                            {gameIds.map((game, _) =>(
                                <Gamecard rounded='rounded-4xl' Gamename={game.Name} src={game.Image} ExperienceId={game.experienceId} VisitCount={game.AltVisitCount} PlaceId={game.PlaceId}></Gamecard>
                            ))}
                        </div>
                    </Fade>
                </section>
                
                <div className='mt-52'></div>
                <Footer></Footer>
            </ThemeProvider>
        </>
    )
}