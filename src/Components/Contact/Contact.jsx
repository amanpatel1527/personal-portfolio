import React, { useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
export const Contact = () => {

    const form = useRef();

    const [done,setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uarzgce', 'template_hn2ovcd', form.current, 'pTpVmEEwwXDe3lyyh')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <div className="contact-form">
      {/* Left side of contact section */}
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* Right Side of contact Section */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{  done &&  "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};
