import { useState,useEffect } from "react";

function Item({name,isPacked = false}){
    // if(isPacked) return (<li>{name} ✔</li>)
    // return(<li>{name}</li>);

    // return (<li>
    //     {isPacked ? name + '✔' : name}
    // </li>)

    return (<li>
        {name} {isPacked && '✔'}
    </li>)
}

export default function ItemList(){

    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this component is loaded");

        return ()=>{
            alert("component unloaded")
        }
    },[]);
    const items =[{name:"Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Towel",isPacked:true},
        {name:"Powerbank",isPacked:false},
        {name:"Tower",isPacked:false}];

    const filterList = items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()));

    const itemList=filterList.map(i=><Item key={i.name} name={i.name} isPacked={i.isPacked} />);

    return (<ui>
            {/* <Item name="Sunglass" isPacked={false}></Item>
            <Item name="Sunblock" isPacked={true}></Item>
            <Item name="Swimming suit" isPacked={true}></Item>
            <Item name="Towel" isPacked={false}></Item> */}
            <input type="textfill" value={keyword} onChange={(e)=>setKeyword(e.target.value)}></input>
            {itemList}
        </ui>)
}