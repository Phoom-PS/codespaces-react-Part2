export default function MouseEvent(){
    return (<h1 
    onClick={e=> console.log("onClick")} 
    onMouseEnter={e=>console.log("onMouseEnter")}
    onMouseDown={e=>console.log("onMouseDown")}
    onMouseUp={e=> console.log("onMouseUp")}
    onMouseLeave={e=>console.log("onMouseLeave")}
    >Click Me</h1>)
}