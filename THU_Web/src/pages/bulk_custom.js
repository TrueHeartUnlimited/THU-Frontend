import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/contact"
import StyledBackgroundSection from '../components/BackgroundSection'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -27.464320,
  lng: 153.011270
};

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <StyledBackgroundSection class="header">
        <h1>Large Custom Piece Orders</h1>
    </StyledBackgroundSection>
    <div class="container" id="contact-us">
        <div>
            <p>We cater to large orders of items or even large orders of custom items. If you are interested in getting pouches for your company or bags for your organisation we are happy to work with you to make something tailored for you.</p>
        </div>
        <div class="flex separator space_between">
        <h2>Send Us a Message</h2>
          <form method="POST" data-netlify="true">
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

export default SecondPage
