import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
 


export default function Contact() {




 

 
 
 

  
const [message, setMessage] = useState(false);


const handleSubmit = (e) =>{

   e.preventDefault();
    
    
    setMessage(true)
    emailjs.sendForm('service_izsargb', 'template_ic3cvdc', e.target, 'user_5JvQDw83rSDoNGkk7WvO7').then(res=>{
    console.log(res);
    
    e.target.reset();
    }).catch(err=>console.log(err));

    
    
}

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form id="emailForm" onSubmit={handleSubmit} >
          <input type="email" name="email" id="emailInput" placeholder="email" required/>
          <textarea name="message" id="messageInput" cols="30" rows="10" placeholder="message" required ></textarea>
          <button >Send</button>
          <h1 id="messageOutput">{message && <span>Thank you for your message!</span>}</h1>
          
        </form>
      </div>
    </div>
  )
}
