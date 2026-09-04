import { useEffect, useState } from "react";
import "../styles/Nav.css";


function Nav(){
const [show,setShow]=useState(false);


useEffect(()=>{
    const handleScroll =() =>{
        if(window.scrollY >650){
            setShow(true);
        }
        else{
            setShow(false)
        }
        };
window.addEventListener("scroll", handleScroll);
//cleanup Listener on Unmount
return () =>{
        window.removeEventListener("scroll", handleScroll);
            };
         },[]);

const scrollToTop=()=> {
         window.scrollTo({top:0, behavior: "smooth"});
    };
 const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

    return(
        <div className={`nav ${show &&"nav_black"}`}>
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" 
        alt="nav-logo" 
        className="nav_logo"
        onClick={()=>scrollToTop()}
                style={{ cursor: "pointer" }}
     />

    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        alt="nav-avatar"
        className="nav_avatar" />

</div>

    )
}


export default Nav;