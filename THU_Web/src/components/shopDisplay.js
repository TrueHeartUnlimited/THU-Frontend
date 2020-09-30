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
  return styles;
}

const getColours = items=>{
  var tempItems = [];
  items.map(items =>{
    if(items.node.colours.length > 1){
      for(var i = 0; i < items.node.colours.length; i++){
        console.log(items.node.colours[i]);
        tempItems.push(items.node.colours[i].toString());
      };
      return;
    }else{
      return tempItems.push(items.node.colours.toString());
    }
  });
  let tempColours = new Set(tempItems);
  let colours = Array.from(tempColours);
  return colours;
}

const getSize = items=>{
  var tempItems = [];
  items.map(items =>{
    if(items.node.size.length > 1){
      for(var i = 0; i < items.node.size.length; i++){
        console.log(items.node.size[i]);
        tempItems.push(items.node.size[i].toString());
      };
      return;
    }else{
      return tempItems.push(items.node.size.toString());
    }
  });
  let tempSize = new Set(tempItems);
  let sizes = Array.from(tempSize);
  return sizes;
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
          else if(this.state.styles.includes(option) === true){
            let items = tempItems.filter(({node})=>node.style.toString() === option);
            this.setState(()=>{
              return{sortItems:items}
            })
          }
          else if(this.state.colours.includes(option) === true){
            var items = [];
              for(var i=0; i<tempItems.length; i++){
                for(var j=0; j<tempItems[i].node.colours.length; j++){
                  if(tempItems[i].node.colours[j].toString() === option){
                    items.push(tempItems[i]);
                  }
                }
              }
            this.setState(()=>{
              return{sortItems:items}
            })
          }
          else if(this.state.size.includes(option) === true){
            var items = [];
              for(var i=0; i<tempItems.length; i++){
                for(var j=0; j<tempItems[i].node.size.length; j++){
                  if(tempItems[i].node.size[j].toString() === option){
                    items.push(tempItems[i]);
                  }
                }
              }            this.setState(()=>{
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

/*     handleToggle = option =>{
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
    } */
    //renders the HTML and javascript of teh component
    render(){
        console.log(this.state.colours)
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
                              <div class="seperator"></div>
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
                            <div class="seperator"></div>
                              <li>Colours <FontAwesomeIcon icon={ faChevronDown }/>
                                  <ul class="shop-dropdown">
                                    {this.state.colours.map((colour, index)=>{
                                      return (
                                        <li><button type='button' key={index} class="I'm sorry" onClick={()=>{
                                          this.handleItems(colour)
                                        }}>{colour}</button></li>
                                      )
                                    })}
                                  </ul>
                              </li>
                              <div class="seperator"></div>
                              <li>Styles <FontAwesomeIcon icon={ faChevronDown }/>
                                  <ul class="shop-dropdown">
                                    {this.state.styles.map((style, index)=>{
                                      return (
                                        <li><button type='button' key={index} class="I'm sorry" onClick={()=>{
                                          this.handleItems(style)
                                        }}>{style}</button></li>
                                      )
                                    })}
                                  </ul>
                              </li>
                              <div class="seperator"></div>
                              <li>Size <FontAwesomeIcon icon={ faChevronDown }/>
                                  <ul class="shop-dropdown">
                                    {this.state.size.map((size, index)=>{
                                      return (
                                        <li><button type='button' key={index} class="I'm sorry" onClick={()=>{
                                          this.handleItems(size)
                                        }}>{size}</button></li>
                                      )
                                    })}
                                  </ul>
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