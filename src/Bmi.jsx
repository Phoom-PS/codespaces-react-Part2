import { useRef,useState } from "react";

export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const[bmi,setBmi] = useState(0.00)

    function BmiText({bmi}){
        if(bmi<18.5) return <h1>Unterweight</h1>
        if(bmi>30) return <h1>Overweight</h1>
        return <h1>Normal</h1>
    }

    function handleClick(){
        let weight = W_input.current.value;
        let height = H_input.current.value;
        setBmi( weight/((height*height)/10000) )
    }
    return (<>
     weight : <input ref={W_input}/>
     Height : <input ref={H_input}/>
     <button onClick={handleClick}>calulate</button>
     BMI : {bmi.toFixed(2)}
     <BmiText bmi={bmi}/>
    </>);
}