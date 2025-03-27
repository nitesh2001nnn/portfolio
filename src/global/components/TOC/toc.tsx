import { useEffect, useRef, useState } from 'react';
import UseHeadingData from '../../hooks/useHeadingData/useHeadingData';
import './tox.scss';


const Headings =({headings,onHeadingClick,activeId}:any)=>{
  return(
    <>
    {headings.map((item:any,index:any)=>{
      return(
        <div onClick={()=>onHeadingClick(item.id)} className={`${activeId == item.id?"active":""}`}>
          {item.id == "root"?"":item.id}
        </div>
      )
    })}
    </>
  )



}

const useIntersectionObserver=(setActiveId:any)=>{
  const headingref:any = useRef({});
  useEffect(()=>{
    const callback=(heading)=>{
      heading.forEach((a)=>{
        const headingId = a.target.getAttribute('id');
        if(headingId && headingId !== 'root'){
          headingref.current[headingId]=a
        }
      })
      console.log("now heading ref current",Object.keys(headingref.current))

      const visibleHeading:any=[];
      Object.keys(headingref.current).map((a,b)=>{
        console.log("after object",a)
        const headingElement = headingref.current[a];
        console.log("heading element from visible part",headingElement)
        if(headingElement.isIntersecting){
          visibleHeading.push(headingElement)
        }
      })

      const getIndexById=(id:any)=>{
        console.log("get di from headidng eleemtns below",id)
        headingElements.map((headingid)=>headingid.getAttribute('id')===id)
      }

      if(visibleHeading.length === 1){
         console.log("lenght 1 id",visibleHeading[0].target.getAttribute('id'))
         setActiveId(visibleHeading[0].target.getAttribute('id'))
      }
      else if(visibleHeading.length>1){
        const sortedid = visibleHeading.sort((a:any,b:any)=>{
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          getIndexById(a.target?.getAttribute('id')) > getIndexById(b.target?.getAttribute('id'))

        })
        console.log("sorted id",sortedid)
        setActiveId(sortedid[0].target.getAttribute('id'))
      }

      console.log("visible heading now",visibleHeading)
      
      // object.keys(headingref.current)

    }
    const observer = new IntersectionObserver(callback,{
      rootMargin:"0px 0px -40% 0px"
    })
    const headingElements = Array.from(document.querySelectorAll('[id]'));
    headingElements.forEach((heading)=>{
      observer.observe(heading)
    })
    return () => observer.disconnect();
  },[setActiveId])

}

const Toc = ({onHeadingClick}:any) => {
  const[activeId,setActiveId]=useState<any>()
  const{nestedHEading}=UseHeadingData();
  useIntersectionObserver(setActiveId)

  useEffect(()=>{
    console.log("nested heading",nestedHEading)
  },[nestedHEading])

  useEffect(()=>{
    console.log("active id now from toc",activeId)
  },[activeId])
  return (
    <div aria-label='Table-of-contents'>
      <Headings headings={nestedHEading} onHeadingClick={onHeadingClick} activeId={activeId}/>
    </div>
  )
}

export default Toc
