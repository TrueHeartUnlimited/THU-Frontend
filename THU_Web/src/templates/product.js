import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"
import {connect} from "react-redux"
import StyledBackgroundSection from '../components/BackgroundSection'

import Tabs from "../components/tabs.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {addToCartMessage} from "../store/actions"

const mapDispatchToProps = {
  addToCart: (product, count, colour) => addToCartMessage(product, count, colour)
};

const Product = ({ addToCart, data }) => {
  const [count, setCount] = useState(1)
  const [imageIndex, setIndex] = useState(0)
  var currentColour = ""

  function updateimage(direction){
    var totalImages = data.product.productImages.length;
    if(imageIndex === totalImages-1){
      setIndex(0)
    } else{
      if(direction === "forward"){
        setIndex(imageIndex + 1)
      }else{
        if(imageIndex === 0){
          setIndex(totalImages-1)
        }
        else{
          setIndex(imageIndex -1)
        }
      }
    }
  }

  function checkValid(){
    if(currentColour !== "" ){
      addToCart(data.product, count, currentColour)
    }
    else{
      alert("Please Select Colour")
    }
  }

  function updateSwatch(index){
    currentColour = data.product.productImages[index].description
    setIndex(index)
  }

  function colorClass(description){
    var colString = "";

    if(description.match(/^red/gi)){
      colString="swatch-color red-swatch"
    }else if(description.match(/^orange/gi)){
      colString="swatch-color orange-swatch"
    }else if(description.match(/^yellow/gi)){
      colString="swatch-color yellow-swatch"
    }else if(description.match(/^green/gi)){
      colString="swatch-color green-swatch"
    }else if(description.match(/^blue/gi)){
      colString="swatch-color blue-swatch"
    }else if(description.match(/^dark blue/gi)){
      colString="swatch-color dark-blue-swatch"
    }else if(description.match(/^purple/gi)){
      colString="swatch-color purple-swatch"
    }else if(description.match(/^pink/gi)){
      colString="swatch-color pink-swatch"
    }else if(description.match(/^tan/gi)){
      colString="swatch-color tan-swatch"
    }else if(description.match(/^brown/gi)){
      colString="swatch-color brown-swatch"
    }else if(description.match(/^black/gi)){
      colString="swatch-color black-swatch"
    }else if(description.match(/^white/gi)){
      colString="swatch-color white-swatch"
    }else if(description.match(/^grey/gi)){
      colString="swatch-color grey-swatch"
    } else{
      colString = "not valid"
    }
    return(colString)
  }

    return(
        <Layout>
            <SEO title={data.product.productName}/>
            <StyledBackgroundSection class="product-header"></StyledBackgroundSection>
            <div class="container">
                <div class="flex space_between" id="product">
                    <div id="product-image">
                      {/* <button onClick={() => updateimage("back")}>-</button> */}
                      <Img fluid = {data.product.productImages[imageIndex].fluid} key = {data.product.productImages[imageIndex].fluid.src} alt={data.product.productImages.title}/>
                        {/*{data.product.productImages.map(image => <Img fluid = {image.fluid} key = {image.fluid.src} alt={image.title}></Img>)}*/}
                      {/* <button onClick={()=>updateimage("forward")}>+</button> */}
                    </div>
                    <div id="product-info">
                        <div id="product-name-rating">
                            <h2>{data.product.productName}</h2>
                        </div>
                        <div id="product-price-description">
                            {data.product.price2 != null
                              ? <h3 class="product-price">${data.product.price}-{data.product.price2}</h3>
                              : <h3 class="product-price">${data.product.price}</h3>
                            }
                            <p dangerouslySetInnerHTML={{__html: data.product.description.description}}/>
                        </div>
                        <div id="add-invoice">
                          <form  onSubmit="return false">
                          <input type="button" class="quantity-change" value="-" onClick={()=> setCount(count - 1)}/>
                          <input type="text" class="qty" value={count}/>
                          <input type="button" class="quantity-change" value="+" onClick={()=> setCount(count + 1)}/>
                          <input type="submit" value="Update Invoice" class="btn submit table-submit" onClick={()=> checkValid()}/>
                          </form>
                        </div>
                    </div>
                </div>
                <div id="product-table">
                    <Tabs class="tab-content">
                        <div class="tab-pane active" label="Customisation">
                            <table class="product-table">
                                <tr>
                                    <th>Colour</th>
                                    <td class="flex" id="swatches">
                                      {data.product.productImages.map((image, index) =>{
                                          if(colorClass(image.description) !== "not valid"){
                                            return(
                                            <dl class="swatch-dl" onClick={()=>updateSwatch(index)}>
                                              <dt class="swatch-dt">
                                                  <span class={colorClass(image.description)}>
                                                      <span class="swatch-color"></span>
                                                  </span>
                                              </dt>
                                              <dd class="text-color">
                                                  <div class="color-alt">
                                                      <span class="text-color">{image.description}</span>
                                                  </div>
                                              </dd>
                                            </dl>
                                          )}
                                      })}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Strap Length</th>
                                    <td>
                                        <ul>
                                            <li>Strap Length 1</li>
                                            <li>Strap Length 2</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            {data.product.customisable === true &&
                            <div class="flex space_between">
                                <p id="customisation">Bag not perfect? Get it customised further. Contact us to get exactly what you want</p>
                                <p style={{marginTop:"10px"}}><Link to="/custom" class="btn" id="custom-btn">Get Custom</Link></p>
                            </div>
                            }
                        </div>
                        <div class="tab-pane" label="Product Information">
                            <table class="product-table">
                                <tbody>
                                    <tr>
                                        <th>Size:</th>
                                        <td>{data.product.sizing}</td>
                                    </tr>
                                    <tr>
                                        <th>Strap Size:</th>
                                        <td>61cm/121cm</td>
                                    </tr>
                                    <tr>
                                        <th>Colours:</th>
                                        <td>{data.product.colours.map(colour => <p>{colour}</p>)}</td>
                                    </tr>
                                    <tr>
                                        <th>Material</th>
                                        <td>{data.product.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*<div class="tab-pane" label="Reviews" id="reviews">
                            <div class="review flex space_between">
                                <div class="name-rating">
                                    <p>Jane Doe</p>
                                    <p class="rating">
                                        <FontAwesomeIcon icon={ fasStar }/>
                                        <FontAwesomeIcon icon={ fasStar }/>
                                        <FontAwesomeIcon icon={ fasStar }/>
                                        <FontAwesomeIcon icon={ faStarHalfAlt }/>
                                        <FontAwesomeIcon icon={ farStar }/>
                                    </p>
                                </div>
                                <div class="review-message">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                                </div>
                            </div>
                        </div>*/}
                    </Tabs>
                </div>
            </div>
      </Layout>
    );
};

Product.propTypes = {
    data: PropTypes.object.isRequired,
};

export const data = graphql`
    query($path: String!){
        product: contentfulProduct(path: {eq: $path }){
            category
            collection
            colours
            customisable
            productName
            style
            size
            sizing
            id
            material
            price
            price2
            description {
              description
            }
            productImages {
              description
              fluid {
                ...GatsbyContentfulFluid
              }
            }

        }
    }
`;

export default connect(null,mapDispatchToProps)(Product)
