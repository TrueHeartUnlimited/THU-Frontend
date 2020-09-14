import React from "react"
import PropTypes from "prop-types";
import {graphql} from "gatsby";


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {

    return(
        <Layout>
            <SEO title="About Kangaroo Leather" />
            <div class="header">
                <h1>About Kangaroo Leather</h1>
            </div>
            <div class="container">
                <div id="kangaroo-video"></div>
                <div class="body separator large-body">
                    <div dangerouslySetInnerHTML={{__html: data.info.krooPreamble.internal.content}}/>
                </div>
            </div>
            <div class="body" id="features">
                <div class="container">
                    <div class="flex">
                        <div class="feature">
                            <div dangerouslySetInnerHTML={{__html: data.info.keyPoint1.html}}/>
                        </div>
                        <div class="feature">
                            <div dangerouslySetInnerHTML={{__html: data.info.keyPoint2.html}}/>
                        </div>
                        <div class="feature">
                            <div dangerouslySetInnerHTML={{__html: data.info.keyPoint3.html}}/>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="feature">
                            <div dangerouslySetInnerHTML={{__html: data.info.keyPoint4.html}}/>
                        </div>
                        <div class="feature">
                            <div dangerouslySetInnerHTML={{__html: data.info.keyPoint5.html}}/>
                        </div>
                        <div class="feature">
                            <div dangerouslySetInnerHTML={{__html: data.info.keyPoint6.html}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="body flex">
                    <div class="about-body">
                        <div dangerouslySetInnerHTML={{__html: data.info.krooBody.internal.content}}/>
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
        info: contentfulAboutKangarooLeather {
            krooPreamble {
              internal {
                content
              }
            }
            krooBody {
              internal {
                content
              }
            }
            keyPoint1 {
                ...html
            }
            keyPoint2 {
                ...html
            }
            keyPoint3 {
                ...html
            }
            keyPoint6 {
                ...html
            }
            keyPoint5 {
                ...html
            }
            keyPoint4 {
                ...html
            }
        }
        
    }
`;

export default SecondPage
