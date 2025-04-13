import './App.css'
import { ThemeProvider } from "./components/theme-provider"

import Header from "./components/header"
import {Input} from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"

import Footer from "./components/footer"
import {ScrollToTop} from "./components/ScrollToTop"

export default function(){
    return (
        <>
            <ThemeProvider>
                <ScrollToTop></ScrollToTop>
                <Header/>
            
                <section className="flex flex-col lg:flex-row justify-around items-center pt-[15%]">
                    <div
                        className="fixed w-1/2  inset-0 scale-200 rotate-45 -z-10 brightness-30 hidden dark:block bg-slate-500 overflow-hidden
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

                    <div className="w-full lg:w-[40%] pl-10 drop-shadow-2xl dark:drop-shadow-white/30 drop-shadow-black/40 animate__animated animate__rotateInDownLeft">
                        <h1 className="text-5xl font-bold">Lets make something great together.</h1>
                        <h2 className="text-lg mt-10 brightness-50 font-semibold">We're always looking to collaborate with visionary partners who want to build bold, impactful projects. Whether you're ready to invest or just exploring opportunities, we’d love to hear from you.</h2>
                        <p className='mt-5 mb-1 brightness-80 font-bold text-xl'>📞 +1 (555) 234-5678</p>
                        <p className='brightness-80 font-bold text-xl'>✉ hello@example.com</p>
                    </div>
                    
                    <div className="w-[90%] mt-10 lg:mt-0 lg:w-[45%] flex flex-col gap-5 animate__animated animate__fadeIn">
                        <div className="flex gap-5">
                            <Input type="text" placeholder="First Name"></Input>
                            <Input type="text" placeholder="Last Name"></Input>
                        </div>
                        <Input type="email" placeholder="Email"></Input>
                        <Input type="number" placeholder="Phone #"></Input>
                        <div className="grid w-full gap-1.5 relative">
                            <p className='brightness-70 font-semibold'>Your message</p>
                            <Textarea placeholder="Type your message here." id="message" />
                            <Button className='w-[35%] absolute right-0 -bottom-5 translate-y-full'>Send message</Button>
                        </div>
                    </div>
                </section>
                
                <div className='mt-52 lg:mt-96'></div>
                <Footer></Footer>
            </ThemeProvider>
        </>
    )
}