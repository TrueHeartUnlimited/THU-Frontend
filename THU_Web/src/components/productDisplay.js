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
                  <div className="flex space_between grid product-container">
                    {this.state.sortItems.map(({node})=>{
                      return (
                        <figure class="effect-chico">
                          <Img fluid={node.productImages[0].fluid}/>
                          <figcaption>
                            <h3>{node.productName}</h3>
                                {node.price2 != null
                                  ? <p class="price">${node.price}-${node.price2}</p>
                                  : <p class="price">${node.price}</p>
                                }
                            <Link to={node.path}>View Details</Link>
                          </figcaption>
                        </figure>
                      )
                    })}
                  </div>
            )
        }
        else{
            return(
                <h1>There are no products currently</h1>
            )
        }
    }
}
