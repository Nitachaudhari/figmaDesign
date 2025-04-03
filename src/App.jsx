import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/Navigation/TopNav'
import Nav1 from './components/Navigation/Nav1'
import FirstContainer from './components/FirstContainer'
import CategoryPage from './components/CategoryPage'
import BestSellingCourses from './components/BestSellingCourses'
import FeatureCourses from './components/FeatureCourses'
import BecomeInstructor from './components/BecomeInstructor'
import TopInstructors from './components/TopInstructor'
import TrustedCompany from './components/TrustedCompany'
import CallToAction from './components/Footer/CallToAction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TopNav />
     <Nav1 />
     <FirstContainer />
     <CategoryPage />
     <BestSellingCourses/>
     <FeatureCourses />
     <BecomeInstructor />
     <TopInstructors />
     <TrustedCompany />
     <CallToAction />
    </>
  )
}

export default App
