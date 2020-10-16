import React from "react";

import '../pages/main.css';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

  };

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  render(){

    const {name, email, message} = this.state;
    return (
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact"/>
              <div class="flex space_between">
                  <div class="form-half-width">
                      <label>Your Name<span class="red">*</span>
                      <input type="text" name="name" class="half-width" value={name} onChange={this.handleChange}/></label>
                  </div>
                  <div class="form-half-width">
                      <label>Your Email<span class="red">*</span>
                      <input type="email" name="email" class="half-width" value={email} onChange={this.handleChange}/></label>
                  </div>
              </div>
              <label>Message<span class="red">*</span>
              <textarea name="message" value={message} onChange={this.handleChange}></textarea></label>
              <button type="submit">Submit</button>
          </form>
    );
  }
}
