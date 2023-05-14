import { useState } from "react";
const About=()=>{
    const [firstname,setFirstname]=useState('ali');
    const Clicked=()=>{
        if(firstname=='salih'){
            setFirstname('ali');
        }
        if(firstname=='ali'){
            setFirstname('salih');
        }
        
    }
    return(
        <div>
        <h1>About</h1>
        <h2>{firstname}</h2>
        <button onClick={Clicked} type="button" className="btn btn-primary">Click Here</button>
        </div>
    );
}
export default About;