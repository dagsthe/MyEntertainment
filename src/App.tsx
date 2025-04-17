import './App.css'
import Header from "./components/header"
import { ThemeProvider } from "./components/theme-provider"
import {Button} from "./components/ui/button"
import Marquee from "react-fast-marquee";
import Imagebrand from "./components/ui/imagebrand"
import Card from "./components/ui/Card"
import Gamecard from "./components/ui/Gamecard"
import Footer from "./components/footer"
import {Link} from "react-router-dom"

import { Fade, Rotate} from "react-awesome-reveal";
import 'animate.css';
import {ScrollToTop} from "./components/ScrollToTop"

import {gameIds} from "./gameIds"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <section className='relative flex flex-col  items-center h-screen w-screen'>
        <img className='object-cover w-full h-full -z-10 absolute opacity-40 brightness-60 blur-xs dark:blur-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/b/5/d/b5df22212253eda5f0cebe857cc84dd9a874a478.jpeg"></img>
        
        <Fade duration={2000} triggerOnce={true}>
        <h1 className='text-3xl md:text-6xl font-semibold pt-20 text-center mt-20 animate__animated animate__lightSpeedInLeft'>Unleashing a New Era of Experiences</h1>
        <h2 className="text-sm md:text-xl font-medium text-primary brightness-90 mt-5 text-center animate__animated animate__lightSpeedInLeft">Empowering visionaries to redefine the future.</h2>

          <div className='flex flex-row gap-5 justify-center mt-5 h-12'>
            <Button onClick={() => {
                const section = document.getElementById("aboutus")
                if (section)
                    section.scrollIntoView({behavior:"smooth"})
             }} className='bg-blue-600 text-white rounded-2xl h-full hover:bg-blue-800'>Learn More &gt;
            </Button>

            <Link to={"/contact"}><Button variant="secondary" className='rounded-2xl h-full'>Get Started</Button></Link>
          </div>

          <div className='flex flex-row justify-center gap-4 md:gap-16 pt-4 text-center font-bold text-xl md:text-3xl'>
            <div>
              <h2>3,000+</h2>
              <h3>Active Players</h3>
            </div>

            <div>
              <h2>60M+</h2>
              <h3>Lifetime Visits</h3>
            </div>
          </div>
        </Fade>

        
        <div className='absolute bottom-3'>
            <Marquee className='h-20 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] overflow-hidden' autoFill={true}>
              <Imagebrand src='https://cdn.medal.tv/assets/img/new-medal-logo-small.png'></Imagebrand>
              <Imagebrand className='dark:invert' src='https://upload.wikimedia.org/wikipedia/commons/4/4b/Roblox_Logo_2022.svg'></Imagebrand>
              <Imagebrand className='' src='https://upload.wikimedia.org/wikipedia/en/b/b4/Gamefam_Logo.png'></Imagebrand>
            </Marquee>
        </div>
      </section>

      <Rotate fraction={0.2} triggerOnce={true}>
        <Fade fraction={0.2}>
            <section id='aboutus' className='flex flex-col md:flex-row h-auto w-[90%] lg:items-center justify-center mx-auto pt-20 gap-[10%]'>
              <div className='w-full text-center md:text-left md:w-[40%]'>
                <h1 className='text-4xl font-bold mb-10'>We deliver unparalleled growth, engagement, and success.</h1>
                <p>Within just the last few years, LevelUp Games has expanded exponentially with zero capital funding. With over 60M visits, and consistent 3000+ concurrent users daily, We have quickly risen to the top 20% developers on the Roblox platform with no plans of stopping anytime soon.</p>
                <div className='flex flex-row gap-5 mt-5 h-12 justify-center md:justify-normal'>
                  <Link to={"/contact"}><Button className='cursor-pointer bg-blue-600 hover:bg-blue-800 text-white rounded-2xl h-[80%] w-40'>Let's Talk! &gt;</Button> </Link>
                </div>
              </div>

              <div className='w-full md:w-[40%] gap-5 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 mb-10 mt-10 md:mt-0'>
                <Card Heading='200K+' Text="With over 200,000 members in our community we know what brings players together"></Card>
                <Card Heading='60M+' Text="With over 60M+ visits across our entire portfolio, we know exactly how to expand any game."></Card>
                <Card Heading='3000+' Text="Our acquired games have reached a total of 3000 concurrent players. Join us today."></Card>
                <Card Heading='20M+' Text="We've achieved 20M+ unique play sessions offering unique experiences for many different players"></Card>
              </div>
            </section>

        </Fade>
      </Rotate>



      <Fade>
        <section className='text-center m-10 h-auto'>
          <h1 className='text-4xl font-bold mb-5'>Our Top Experiences</h1>
          <Marquee className='h-60 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] overflow-hidden' autoFill={true}>
            {gameIds.map((game, _) =>(
              <Gamecard className='mx-5' Gamename={game.Name} src={game.Image} ExperienceId={game.experienceId} VisitCount={game.AltVisitCount} PlaceId={game.PlaceId}></Gamecard>
            ))}
          </Marquee>
          <Link to="/experiences"><Button type='button' className='cursor-pointer bg-blue-600 hover:bg-blue-800 text-white rounded-2xl h-full'>See All Experiences &gt;</Button></Link>
        </section>
      </Fade>


      <Footer></Footer>
    </ThemeProvider>
  )
}

export default App
