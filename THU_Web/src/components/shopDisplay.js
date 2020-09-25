import React, {Component} from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//creates arrays for each sort functionality
const getCategories = items =>{
  let tempItems = items.map(items =>{
    return items.node.category.toString();
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories=['All', ...categories];
  return categories;
}

const getStyles = items=>{
  let tempItems = items.map(items =>{
    return items.node.style.toString();
  });
  let tempStyles = new Set(tempItems);
  let styles = Array.from(tempStyles);
  styles = ['All', ...styles];
  return styles;
}

const getColours = items=>{
  let tempItems = items.map(items =>{
    return items.node.colours.toString();
  });
  let tempColours = new Set(tempItems);
  let colours = Array.from(tempColours);
  colours=['All', ...colours];
  return colours;
}

const getSize = items=>{
  let tempItems = items.map(items =>{
    return items.node.size.toString();
  });
  let tempSize = new Set(tempItems);
  let size = Array.from(tempSize);
  size = ['All', ...size];
  return size;
}

const getCollection= items =>{
  let tempItems = items.map(items =>{
    return items.node.collection.toString();
  });
  let tempCollections = new Set(tempItems);
  let collections = Array.from(tempCollections);
  collections=['All', ...collections];
  return collections;
}
//

//creates, displays and filters products as thumbnails
export default class productDisplay extends Component{
  //constructs filter arrays
    constructor(props){
        super(props);
        this.state={
            items:props.items.edges,
            sortItems:props.items.edges,
            categories: getCategories(props.items.edges),
            styles: getStyles(props.items.edges),
            colours: getColours(props.items.edges),
            size: getSize(props.items.edges),
            collection: getCollection(props.items.edges),
        };
    }

    //handles displaying the items for buttons
    handleItems = option =>{
        let tempItems = [...this.state.items];
        if(option ==='All'){
          this.setState(()=>{
          return{sortItems:tempItems}
          })
        }
        else{
          if(this.state.categories.includes(option) === true){
            let items = tempItems.filter(({node})=>node.category.toString() === option);
            this.setState(()=>{
              return{sortItems:items}
            })
          }
          else{
            let items = tempItems.filter(({node})=>node.collection.toString() === option);
            this.setState(()=>{
              return{sortItems:items}
            })
          }
        }
    };

    handleToggle = option =>{
      const currentIndex = Checked.indexOf(option);
      const newChecked = [...Checked];
      if (currentIndex === -1){
        newChecked.push(option)
      }
      else{
        newChecked.splice(currentIndex, 1)
      }
      setChecked(newChecked)
      this.props.handleFilters(newChecked)
    }

    //renders the HTML and javascript of teh component
    render(){
        if(this.state.items.length>0){
            return(
                <section>
                  <div className="container">
                    {/*changes ststas based on the selected filters*/}
                        <div id="filter">
                          <ul>
                            <li>Collection <FontAwesomeIcon icon={faChevronDown}/>
                                <ul class="shop-dropdown">
                                  {this.state.collection.map((collection, index)=>{
                                    return(
                                      <li><button type="button" key={index} class="I'm sorry" onClick={()=>{
                                        this.handleItems(collection)
                                      }} >{collection}</button></li>
                                    )
                                  })}
                                </ul>
                              </li>
                            <li>Category <FontAwesomeIcon icon={faChevronDown}/>
                              <ul class="shop-dropdown">
                                {this.state.categories.map((category, index)=>{
                                  return(
                                    <li><button type="button" key={index} class="I'm sorry" onClick={()=>{
                                      this.handleItems(category)
                                    }} >{category}</button></li>
                                  )
                                })}
                              </ul>
                            </li>
                            <li>Colour <FontAwesomeIcon icon={faChevronDown}/>
                              <ul class='shop-dropdown'>
                                {this.state.categories.map((colour, index)=>{
                                  <li><checkbox onChange={()=>{
                                    this.handleToggle(colour) 
                                  }}/> </li>
                                })}
                              </ul>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                          </ul>
                        </div>
                      </div>
                    {/*renders the item thumbnails*/}
                      {this.state.sortItems.map(({node})=>{
                        return (
                          <div class="flew space_between grid">
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
                          </div>
                        )
                      })}
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