import React, { Children } from "react"
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {BLOCKS} from "@contentful/rich-text-types"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from '../components/BackgroundSection'

const AboutKangaroo = ({data}) => {
  const options = {
    renderNode:{
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading3">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="copy">{children}</p>
      ),
    },
    renderMark: {},
  }

    return(
        <Layout>
            <SEO title="About Kangaroo Leather" />
            <StyledBackgroundSection>
                <h1>About Kangaroo Leather</h1>
            </StyledBackgroundSection>
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
                           <div>{documentToReactComponents(data.info.keyPoint1.json, options)}</div>
                        </div>
                        <div class="feature">
                            <div>{documentToReactComponents(data.info.keyPoint2.json, options)}</div>
                        </div>
                        <div class="feature">
                            <div>{documentToReactComponents(data.info.keyPoint3.json, options)}</div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="feature">
                            <div>{documentToReactComponents(data.info.keyPoint4.json, options)}</div>
                        </div>
                        <div class="feature">
                            <div>{documentToReactComponents(data.info.keyPoint5.json, options)}</div>
                        </div>
                        <div class="feature">
                            <div>{documentToReactComponents(data.info.keyPoint6.json, options)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="body flex space_between">
                    <div class="about-body">
                        <p dangerouslySetInnerHTML={{__html: data.info.krooBody.internal.content}}/>
                    </div>
                    <div class="kangaroo-image">
                        <img src={'/kangaroo.png'} alt="Kangaroo" id="kangaroo"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

AboutKangaroo.propTypes = {
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
              json
            }
            keyPoint2 {
              json
            }
            keyPoint3 {
              json
            }
            keyPoint6 {
              json
            }
            keyPoint5 {
              json
            }
            keyPoint4 {
              json
            }
        }

    }
`;

export default AboutKangaroo
