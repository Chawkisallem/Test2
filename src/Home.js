const Home=()=>{
    const Clicked=()=>{
        alert('clicked');
    }
    const Clicked1=(e)=>{
        console.log(e);
        console.log(e.target);
    }
    const Click_to_show_name=(my_name)=>{
        alert(my_name);
    }
    const Click_to_show_name2=(my_name,e)=>{
        console.log(my_name+" "+e.target.textContent);
        console.log(my_name+" "+e.target.outerHTML);
    }
    return(
<div className="container">
<h1>Hi I'm Chawki</h1> <br/>
<button onClick={Clicked} type="button" className="btn btn-primary">Click Here</button>
<button onClick={()=>{Click_to_show_name('chawki')}} type="button" className="btn btn-primary">Click Here</button>
<button onClick={Clicked1} type="button" className="btn btn-info">Click event</button>
<button onClick={(e)=>{Click_to_show_name2('chawki',e)}} type="button" className="btn btn-primary">Click Here 2</button>

</div>
    );
}
export default Home;