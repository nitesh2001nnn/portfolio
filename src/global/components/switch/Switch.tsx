export function Switch(props:any){
    const{test,children}=props;
    return children.find((child:JSX.Element)=>{
        return child.props.value === test;
    })
}