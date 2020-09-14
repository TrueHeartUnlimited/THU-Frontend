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
                            <h3>{data.info.keyPoint1.content[0].content.value}</h3>
                            <p>{data.info.keyPoint1.content[1].content.value}</p>
                        </div>
                        <div class="feature">
                            <h3>{data.info.keyPoint2.content[0].content.value}</h3>
                            <p>{data.info.keyPoint2.content[1].content.value}</p>
                        </div>
                        <div class="feature">
                            <h3>{data.info.keyPoint3.content[0].content.value}</h3>
                            <p>{data.info.keyPoint3.content[1].content.value}</p>                        
                        </div>
                    </div>
                    <div class="flex">
                        <div class="feature">
                            <h3>{data.info.keyPoint4.content[0].content.value}</h3>
                            <p>{data.info.keyPoint4.content[1].content.value}</p>                        
                        </div>
                        <div class="feature">
                            <h3>{data.info.keyPoint5.content[0].content.value}</h3>
                            <p>{data.info.keyPoint5.content[1].content.value}</p>                        
                        </div>
                        <div class="feature">
                            <h3>{data.info.keyPoint6.content[0].content.value}</h3>
                            <p>{data.info.keyPoint6.content[1].content.value}</p>                        
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
              content {
                content {
                  value
                }
              }
            }
            keyPoint2 {
              content {
                content {
                  value
                }
              }
            }
            keyPoint3 {
              content {
                content {
                  value
                }
              }
            }
            keyPoint6 {
              content {
                content {
                  value
                }
              }
            }
            keyPoint5 {
              content {
                content {
                  value
                }
              }
            }
            keyPoint4 {
              content {
                content {
                  value
                }
              }
            }
        }
        
    }
`;

export default SecondPage
