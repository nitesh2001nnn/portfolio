/* eslint-disable no-constant-binary-expression */
import { useEffect, useState } from "react";
import "./carousel.scss"

interface caroselTypes{
    images:any;
    noOfImages:number;

}

const Corousel = ({images,noOfImages}:caroselTypes) => {
    const[currIndex,setCurrIndex]=useState(0);
    const[activeIndex,setActiveIndex]=useState(0);
    const[imagesPerPage,setImagePerPage]=useState(3)
    const[direction,setDirection]=useState("")
    const[screenWidth,setScreenWidth]=useState(window.innerWidth);
  
   
    const updateScreenWidth=()=>{
        const width = window.innerWidth
        if(width>=1024){
            setImagePerPage(3)
        }
        else if(width>=768){
            setImagePerPage(2);
        }
        else {
            setImagePerPage(1)
        }
    }

    useEffect(()=>{
        updateScreenWidth()
        const handleResizeWidth=()=>{
            setScreenWidth(window.innerWidth)
            updateScreenWidth()

        }
        window.addEventListener('resize',handleResizeWidth);
        return ()=>window.removeEventListener('resize',handleResizeWidth);
    },[screenWidth])
    const no_Of_Images = (100/imagesPerPage) ;
    const no_of_page = Math.ceil((images.length/imagesPerPage));
    console.log("no of page",no_of_page);
    const boxSize = document.querySelector(".image-container");
    const nextSlide = () => {
       const width = boxSize?.clientWidth;

       const endWidth = boxSize?.scrollLeft || 0 + (width??0)

       if (boxSize) {
        boxSize.scrollLeft = (boxSize.scrollLeft) + (width??0);
      }
     
      
      const prevSlide = () => {
        const width = boxSize?.clientWidth;

       if (boxSize) {
        boxSize.scrollLeft = (boxSize.scrollLeft) - (width??0);
      }
    }
    // useEffect(()=>{

    //     console.log("activeIndex",activeIndex)
    //     console.log("${activeIndex * (no_Of_Images * noOfImages)}",activeIndex * (no_Of_Images))
    // },[activeIndex])

    
        const displayImages = images.slice(currIndex,currIndex+imagesPerPage);
        console.log("display image",displayImages)
   
  return (
    <>
    <div className='carosel-container'>
        
        <button className="button btn-prev" onClick={prevSlide}>&lt;</button>
        <div className="image-container" >
            {
                images.map((item:any,index:any)=>{
                    return(

                        <div key={index} className={`image-cards ${index}`}  >
                            <img src={item}  alt={`carousel-item-${index}`}/>
                        </div>
                        
                    )
                })
            }

        </div>
        <button onClick={nextSlide} className="button btn-next">&gt;</button>
      
    </div>
    <h1>{images.length}</h1>
    </>
    
  )
}

export default Corousel;
