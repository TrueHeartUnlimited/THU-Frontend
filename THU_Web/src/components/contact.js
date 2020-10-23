import React from "react";

import '../pages/main.css';

export default function Contact(){
  return (
    <div class="half-width" id="message">
        <h2>Send Us a Message</h2>
        <form id="contactform" action="https://formsubmit.co/thu@chooseaustralia.com.au" method="POST">
            <div class="flex space_between">
                <div class="form-half-width">
                    <p>Your Name<span class="red">*</span></p>
                    <input type="text" name="name" class="half-width" required/>
                </div>
                <div class="form-half-width">
                    <p>Your Email<span class="red">*</span></p>
                    <input type="text" name="email" class="half-width" required/>
                </div>
            </div>
            <p>Message<span class="red">*</span></p>
            <textarea name="message" required></textarea>
            <input value="Submit" type="submit"/>
        </form>
    </div>
  );
}
