"use client"
import Hero from "./Components/Hero"
import AIFeatures from "./Components/Technology"
import Feature from "./Components/Feature"
import AISolutions from "./Components/Solution"
import Footer from "./Components/Contact"
import Price from "./Components/Pricing"
//import Animation from "../app/Components/Animation"
export default function Home() {
  return (
    <main>
 
      <Hero />
     <AIFeatures />
     <Feature/>
    {/* <Passed/> */}
    <AISolutions/>
  <Price/>
    <Footer/>
    

    </main>
  )
}

