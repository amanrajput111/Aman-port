import React from 'react'
import { Hero } from '../Component/Hero'
import { About } from '../Component/About'
import Skill from '../Component/Skill'
import Project from '../Component/Project'
import Work from '../Component/Work'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'
 
const Home = () => {
  return (
    <div>
        <Hero/>
        
        <About/>
        <Skill />
           <Project />

           <Work />
           <Contact />
           <Footer />
    </div>
  )
}

export default Home