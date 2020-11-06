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
            <h1>Contact Us</h1>
        </StyledBackgroundSection>
    <div class="container" id="contact-us">
        <div class="large-body">
            <p>If you have any queries relating to our products, processes or any concerns please feel free to contact us. Send us a message below or come visit us at our base of operations. Otherwise feel free to call or send an email, our details are listed at the bottom of the page.</p>
        </div>
        <div class="flex separator space_between">
          <Form />
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
