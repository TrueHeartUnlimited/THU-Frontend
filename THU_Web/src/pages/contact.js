import React, { useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact"
import StyledBackgroundSection from '../components/BackgroundSection'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -27.464320,
  lng: 153.011270
};

const SecondPage = () =>{ 
  const [formState, setFormState] = useState({
    name:"",
    email:"",
    message:""
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
    // this will become navigate
      .then(() => alert("Success!"))
      .catch(error => alert(error));

      setFormState({
        name:"",
        email:"",
        message:""
      })

  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return(
    <Layout>
      <SEO title="Contact Us" />
          <StyledBackgroundSection class="header">
              <h1>Contact Us</h1>
          </StyledBackgroundSection>
      <div class="container" id="contact-us">
          <div>
              <p>If you have any queries relating to our products, processes or any concerns please feel free to contact us. Send us a message below or come visit us at our base of operations. Otherwise feel free to call or send an email, our details are listed at the bottom of the page.</p>
          </div>
          {/* Form */}
          <div class="flex separator space_between">
          <div class="half-width" id="message">
            <h2>Send Us a Message</h2>
            <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact"/>
                <div class="flex space_between">
                    <div class="form-half-width">
                        <label htmlFor="name">Your Name<span class="red">*</span>
                        <input type="text" name="name" class="half-width" value={formState.name} onChange={handleChange}/></label>
                    </div>
                    <div class="form-half-width">
                        <label htmlFor="email">Your Email<span class="red">*</span>
                        <input type="email" name="email" class="half-width" value={formState.email} onChange={handleChange}/></label>
                    </div>
                </div>
                <label htmlFor="message">Message<span class="red">*</span>
                <textarea name="message" value={formState.message} onChange={handleChange}></textarea></label>
                <button type="submit">Submit</button>
              </form>          
            </div>
              <div class="half-width">
                  <div class="location-info">
                      <h2>Our Location</h2>
                      <div id="map">
                          <LoadScript googleMapsApiKey="AIzaSyBaLBI6hzrNKKCL5wFZbYj1LN13PJK7RV4">
                              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                                  { /* Child components, such as markers, info windows, etc. */ }
                                  <Marker position={center}/>
                              </GoogleMap>
                          </LoadScript>
                      </div>
                  </div>
                  <div class="separator location-info">
                      <h2>Business Hours</h2>
                      <p>Monday - Friday: 9:00am - 5:00pm</p>
                      <p>Saturday & Sunday: Closed</p>
                      <p>Public Holidays: Closed</p>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default SecondPage
