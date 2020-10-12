import React from "react"
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {BLOCKS} from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from '../components/BackgroundSection'


const SecondPage = ({data}) => {
    const options = {
        renderNode:{
          [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="heading2">{children}</h2>
          ),
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="copy">{children}</p>
          ),
        },
        renderMark: {},
    }

    return (
        <Layout>
            <SEO title="About Us" />
            <StyledBackgroundSection>
                <h1>About Us</h1>
            </StyledBackgroundSection>
            <div class="container">
                <div class="body large-body">
                    <div dangerouslySetInnerHTML= {{__html: data.info.preamble.internal.content}}/>
                </div>
                <div class="body flex space_between separator">
                    <div class="about-body">
                        <h2>Who We Are</h2>
                        <p dangerouslySetInnerHTML={{__html: data.info.abtBody.internal.content}}/>
                    </div>
                    <div class="about-image">
                        <img src={'/bags.png'} alt="Bags" id="bags"/>
                    </div>
                </div>
                <div class="body separator">
                    {/*<div>{documentToReactComponents(data.info.timeline.json, options)}</div>*/}
                    <div class="date flex space_between">
                        <div class="thumb">
                            <img src={'/final-logo.png'} alt="Logo" />
                        </div>
                        <div class="history-info">
                            <h2>November 2013</h2>
                            <p>Launched the business at a friend's house in Bulimba, Brisbane.</p>
                        </div>
                    </div>
                    <div class="date flex space_between">
                        <div class="thumb">
                            <img src={'/history-2.png'} alt="History Image 2" />
                        </div>
                        <div class="history-info">
                            <h2>2012 - 2019</h2>
                            <p>I have been designing and making all the handbags myself, from A to Z.</p>
                        </div>
                    </div>
                    <div class="date flex space_between">
                        <div class="thumb">
                            <img src={'/history-3.png'} alt="History Image 3" />
                        </div>
                        <div class="history-info">
                            <h2>July 2019</h2>
                            <p>A very dear friend of mine in Sydney found Jim Tsoutsouras, in Roselands, Sydney. Jim is the owner of Cleon Designs, he has been in the leather industry for 30 years. Jim had a leather factory in Marrickville but cloed that down due to high overheads, costs of rent and staff. He now operates from the garage of his home and is one of the few leather manufacturers left in Australia. He manufactures for the overseas markets and also sells online.</p>
                        </div>
                    </div>
                    <div class="date flex space_between">
                        <div class="thumb">
                            <img src={'/history-4.png'} alt="History Image 4" />
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
      info: contentfulAboutUs {
        preamble {
          internal {
            content
          }
        }
        timeline {
          json
        }
        abtBody {
            internal{
                content
            }
        }
      }
    }
`;


export default SecondPage
