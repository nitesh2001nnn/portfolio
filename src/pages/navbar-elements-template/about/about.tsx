import Aboutcertification from "./about-certification/about-certification"
import "./about.scss"

const About = ({ref,id}:any) => {
    console.log("ref",ref)
  return (
    <div className='about-container' ref={ref} onClick={(e) => e.stopPropagation()}>
            {id ==1 ? <div className='dropdown-content'><Aboutcertification/></div>:
            <span className='dropdown-content'>How to Read Documentation</span>}
          
    </div>
  )
}

export default About;




