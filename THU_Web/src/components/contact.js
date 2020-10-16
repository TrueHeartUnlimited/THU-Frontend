import React from "react";

import '../pages/main.css';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  render(){

  const {name, email, message} = this.state;
    return (
      <div class="half-width" id="message">
          <h2>Send Us a Message</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit()}>
            <input type="hidden" name="form-name" value="contact"/>
              <div class="flex space_between">
                  <div class="form-half-width">
                      <p>Your Name<span class="red">*</span></p>
                      <input type="text" name="name" class="half-width" value={name} onChange={this.handleChange()}/>
                  </div>
                  <div class="form-half-width">
                      <p>Your Email<span class="red">*</span></p>
                      <input type="email" name="email" class="half-width" value={email} onChange={this.handleChange()}/>
                  </div>
              </div>
              <p>Message<span class="red">*</span></p>
              <textarea name="message" value={message} onChange={this.handleChange}></textarea>
              <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default ContactForm
