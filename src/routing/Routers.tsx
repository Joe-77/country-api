import { Navigate, Route, Routes } from "react-router-dom"
import Container from "../component/Container"
import About from "../component/About"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home'/>}/>
      <Route path="home" element={<Container/>}/>
      <Route path="about/:countryName" element={<About/>}/>
    </Routes>
  )
}

export default Routers