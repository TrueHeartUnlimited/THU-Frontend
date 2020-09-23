import React, {Component} from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

export default class productDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            items:props.items.edges,
            sortItems:props.items.edges
        };
    }

    render(){
        if(this.state.items.length>0){
            return(
                <section className="products py-5">
                <div className="container">
                  {/* categories*/}
                  {/*items */}
                  <div className="row ">
                    {this.state.sortItems.map(({node})=>{
                      return (
                        <div className="container">
                          <figure class="effect-chico">
                            <Img fixed={node.productImages[0].fixed}/>
                            <figcaption>
                              <h3>{node.productName}</h3>
                                    <p class="price">${node.price}</p>
                              <Link to={node.path}>View Details</Link>
                            </figcaption>
                          </figure>
                        </div>
                      )
                    })}
                  </div>
                </div>
                </section>
            )
        }
        else{
            return(<section className="products py-5">
                <div className="contianer">
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-captialize">
                            <h1>there are no items to display</h1>
                        </div>
                    </div>
                </div>
            </section>)
        }
    }
}