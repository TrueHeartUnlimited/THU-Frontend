import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <div class="header">
        <h1>Contact Us</h1>
    </div>
    <div class="container" id="contact-us">
        <div>
            <p>If you have any queries relating to our products, processes or any concerns please feel free to contact us. Send us a message below or come visit us at our base of operations. Otherwise feel free to call or send an email, our details are listed at the bottom of the page.</p>
        </div>
        <div class="flex separator space_between">
            <div class="half-width" id="message">
                <h2>Send Us a Message</h2>
                <form>
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

export default SecondPage
