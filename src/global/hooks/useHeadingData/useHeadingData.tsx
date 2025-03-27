import{ useEffect, useState } from 'react'


const getNestedHeading=(headingElements)=>{
  const nestedHeadings:any = [];
  
  console.log("getnested element",headingElements.pendingProps)
 
  headingElements.forEach((heading:any, index:any) => {
    // const { innerText: title, id } = heading.memoizedProps;
    const id = heading.id;
    const title = heading.getAttribute('title')||""
    nestedHeadings.push({id,title});
    
 
    // if (heading.nodeName === "H2") {
    // } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
    //   nestedHeadings[nestedHeadings.length - 1].items.push({
    //     id,
    //     title,
    //   });
    // }
  });
  console.log("nested heading from toc",nestedHeadings)
  return nestedHeadings;

}

const UseHeadingData = () => {
    const [nestedHEading,setNestedHeading]=useState<any>([]);

    useEffect(()=>{
      const headingElements = Array.from(
        document.querySelectorAll('[id]')
      );
        console.log("heading eleemnts",headingElements)
        const newNestedHeading = getNestedHeading(headingElements);
        setNestedHeading(newNestedHeading)

    },[])
    
  return (
   {nestedHEading}
  )
}

export default UseHeadingData;
