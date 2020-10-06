import React from "react";

export default function Contact(){
  return (
    <div class="half-width" id="message">
        <h2>Send Us a Message</h2>
        <form id="contactform" action="https://formsubmit.co/testingtruweb@gmail.com" method="POST">
            <div class="flex space_between">
                <div>
                    <p>Your Name<span class="red">*</span></p>
                    <input type="text" name="name" class="half-width" required/>
                </div>
                <div>
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