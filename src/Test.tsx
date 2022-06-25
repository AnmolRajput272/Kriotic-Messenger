import React, { useEffect } from "react";
import { useState } from "react";

function Test(){

    const [data,setData] = useState('Not Clicked');

    const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
        e.preventDefault();
        if(data==="Not Clicked"){
            setData('Clicked');
            // console.log(data);
        }
        else{
            setData('Not Clicked');
            // console.log(data);
        }
    }

    useEffect(()=>{
        Notification.requestPermission();

    },[])

    return(
        <div>
            <button type="button" style={{padding:'15px',margin:'25px'}} 
            onClick={(event)=>{
                event.preventDefault();
                new Notification("title",{
                    body:'this is message'
                })
            }}>
                Submit</button>
            <h2>{data}</h2>
        </div>
    )
}

export default Test;