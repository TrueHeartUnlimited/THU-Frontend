import React from "react"
import PropTypes from "prop-types";
import {graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
    const info = data.nodeAbtKgLeather;

    return(
        <Layout>
            <SEO title="About Kangaroo Leather" />
            <div class="header">
                <h1>About Kangaroo Leather</h1>
            </div>
            <div class="container">
                <div id="kangaroo-video"></div>
                <div class="body separator large-body">
                    <div dangerouslySetInnerHTML={{__html: info.field_body_1.processed}}/>
                </div>
            </div>
            <div class="body" id="features">
                <div class="container">
                    <div class="flex">
                        <div class="feature">
                            <h3>Sustainable</h3>
                            <p>{info.field_key_points[0].processed}</p>
                        </div>
                        <div class="feature">
                            <h3>Renewable</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                        <div class="feature">
                            <h3>Natural</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="feature">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                        <div class="feature">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                        <div class="feature">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="body flex">
                    <div class="about-body">
                        <div dangerouslySetInnerHTML={{__html: info.field_body_2.processed}}/>
                        <p></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

SecondPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        nodeAbtKgLeather {
            field_body_1 {
              processed
            }
            field_body_2 {
              processed
            }
            field_key_points {
              processed
            }
            field_small_image {
              alt
            }
            relationships {
              field_small_image {
                localFile {
                  publicURL
                }
              }
            }
        }
    }
`;

export default SecondPage
