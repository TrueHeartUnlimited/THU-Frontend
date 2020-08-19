import React from "react"
import PropTypes from "prop-types";
import {graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
    const info = data.nodeAboutUs;

    return (
        <Layout>
            <SEO title="About Us" />
            <div class="header">
                <h1>About Us</h1>
            </div>
            <div class="container">
                <div class="body large-body">
                    <div dangerouslySetInnerHTML={{__html: info.field_preamble.processed}}/>
                </div>
                <div class="body flex separator">
                    <div class="about-body">
                        <h2>Who We Are</h2>
                        <div dangerouslySetInnerHTML={{__html: info.field_who_we_are.processed}}/>
                    </div>
                    <div id="behind-scenes">
                        <h3>Behind the scenes</h3>
                    </div>
                </div>
                <div class="body separator">
                    <div class="date flex">
                        <div class="thumb">
                        </div>
                        <div class="history-info">
                            <h2>November 2013</h2>
                            <p>Launched the business at a friend's house in Bulimba, Brisbane.</p>
                        </div>
                    </div>
                    <div class="date flex">
                        <div class="thumb">
                        </div>
                        <div class="history-info">
                            <h2>2012 - 2019</h2>
                            <p>I have been designing and making all the handbags myself, from A to Z.</p>
                        </div>
                    </div>
                    <div class="date flex">
                        <div class="thumb">
                        </div>
                        <div class="history-info">
                            <h2>July 2019</h2>
                            <p>A very dear friend of mine in Sydney found Jim Tsoutsouras, in Roselands, Sydney. Jim is the owner of Cleon Designs, he has been in the leather industry for 30 years. Jim had a leather factory in Marrickville but cloed that down due to high overheads, costs of rent and staff. He now operates from the garage of his home and is one of the few leather manufacturers left in Australia. He manufactures for the overseas markets and also sells online.</p>
                        </div>
                    </div>
                    <div class="date flex">
                        <div class="thumb">
                        </div>
                        <div class="history-info">
                            <h2>The Future</h2>
                            <p>From this point forward Jim will be producing all of my handbags. From time to time, I make bespoke pieces.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

SecondPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        nodeAboutUs {
            field_preamble {
              processed
            }
            field_who_we_are {
              processed
            }
            field_timeline {
              processed
            }
          }
    }
`;


export default SecondPage
