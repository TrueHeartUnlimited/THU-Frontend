import React, {Component} from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { node } from 'prop-types';

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
        tempItems.push(items.node.colours[i].toString());
      }
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

const initialiseArray = varLength =>{
  var array = [];
  for(var i=0; i < varLength; i++){
    array[i]= 0;
  }
  return array;
}
//
const Checkbox = ({checked, ...props}) =>(
  <input type="checkbox" {...props}/>
)

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
            checked: !!this.props.initialState,
            binArCol: initialiseArray(getCollection(props.items.edges).length),
            binArCat: initialiseArray(getCategories(props.items.edges).length),
            binArSiz: initialiseArray(getSize(props.items.edges).length),
            binArSty: initialiseArray(getStyles(props.items.edges).length),
            binArClr: initialiseArray(getColours(props.items.edges).length),

        };

    }

    filterOptions = (binOptions, options) =>{
      var output =[]
      for(var i =0; i < binOptions.length; i++){
        if(binOptions[i] === 1){
          output.push(options[i]);
        }
      }
      return output;
    }

    eventHandler = () =>{
      console.log(this.state.binArSiz);
      let tempItems = [...this.state.items];
      //Collection
      var colBinOptions = [...this.state.binArCol];
      var collection = [...this.state.collection];
      if(colBinOptions.reduce((a, b) => a+b, 0) > 0){
        var colOption = this.filterOptions(colBinOptions, collection);
        if(colOption[0] !== 'All'){
          let items = tempItems.filter(({node})=>node.collection.toString() === colOption[0]);
          tempItems = [...items];
        }
      }
      //Category
      var catBinOptions = [...this.state.binArCat];
      var category = [...this.state.categories];
      if(catBinOptions.reduce((a, b) => a+b, 0) > 0){
        var catOption = this.filterOptions(catBinOptions, category);
        if(catOption[0] !== 'All'){
          let items = tempItems.filter(({node})=>node.category.toString() === catOption[0]);
          tempItems = [...items];
        }
      }
      //Size
      var sizBinOptions = [...this.state.binArSiz];
      var size = [...this.state.size];
      if(sizBinOptions.reduce((a, b) => a+b, 0) > 0){
        var sizOption = this.filterOptions(sizBinOptions, size);
        var sizItems =[];
        for(var i = 0; i < sizOption.length; i++){
          //how to return if multiples exist????
          let items = tempItems.filter(({node})=>node.size.toString() === sizOption[i]);
          sizItems.push(...items);
          for(var j = 0; j<tempItems.length; j++){
            if(tempItems[j].node.size.length > 1){
              for(var k = 0; k<tempItems[j].node.size.length; k++){
                if(tempItems[j].node.size[k] === sizOption[i]){
                  if(sizItems.includes(tempItems[j]) === false){
                    sizItems.push(tempItems[j]);
                  }
                }
              }
            }
          }
        }
        tempItems = [...sizItems];
      }
      //Style
      var styBinOptions = [...this.state.binArSty];
      var style = [...this.state.styles];
      if(styBinOptions.reduce((a, b) => a+b, 0) > 0){
        var styOption = this.filterOptions(styBinOptions, style);
        var styItems =[];
        for(var i = 0; i < styOption.length; i++){
          let items = tempItems.filter(({node})=>node.style.toString() === styOption[i]);
          styItems.push(...items);
          for(var j = 0; j<tempItems.length; j++){
            if(tempItems[j].node.style.length > 1){
              for(var k = 0; k<tempItems[j].node.style.length; k++){
                if(tempItems[j].node.style[k] === styOption[i]){
                  if(styItems.includes(tempItems[j]) === false){
                    styItems.push(tempItems[j]);
                  }
                }
              }
            }
          }
        }
        tempItems = [...styItems];
      }
      //Colour
      var clrBinOptions = [...this.state.binArClr];
      var colour = [...this.state.colours];
      if(clrBinOptions.reduce((a, b) => a+b, 0) > 0){
        var clrOption = this.filterOptions(clrBinOptions, colour);
        var clrItems =[];
        for(var i = 0; i < clrOption.length; i++){
          let items = tempItems.filter(({node})=>node.colours.toString() === clrOption[i]);
          clrItems.push(...items);
          for(var j = 0; j<tempItems.length; j++){
            if(tempItems[j].node.colours.length > 1){
              for(var k = 0; k<tempItems[j].node.colours.length; k++){
                if(tempItems[j].node.colours[k] === clrOption[i]){
                  if(clrItems.includes(tempItems[j]) === false){
                    clrItems.push(tempItems[j]);
                  }
                }
              }
            }
          }
        }
        tempItems = [...clrItems];
      }
      //Return Items
      this.setState(()=>{
        return{sortItems:tempItems}
      })
    }

    //make bit invert function
    invertBits = (array, index) =>{
      if(array[index] === 1){
        array[index] = 0;
      }
      else{
        array[index] = 1;
      }
      return array;
    }

    //handles buttons
    handleItems = (option, filter) =>{
      //finds state and makes all bits 0 before making one 1
      if(filter === "Cat"){
        let index = this.state.categories.indexOf(option);
        let array = [...this.state.binArCat];
        for(var i=0; i < array.length; i++){
          if(array[i] === 1){
            array = this.invertBits(array, i);
          }
        }
        array = this.invertBits(array, index);
        this.setState(()=>{
          return{binArCat:array}
        })
      }
      else{
        let index = this.state.collection.indexOf(option);
        let array = [...this.state.binArCol];
        for(var i=0; i < array.length; i++){
          if(array[i] === 1){
            array = this.invertBits(array, i);
          }
        }
        array = this.invertBits(array, index);
        this.setState(()=>{
          return{binArCol:array}
        })
      }
    };

    //Handles checkbox
    handleFilterItems = option =>{
      //needs to identify state and change bit to inverse
      if(this.state.colours.includes(option) === true ){
        let index = this.state.colours.indexOf(option);
        let array = [...this.state.binArClr];
        array = this.invertBits(array, index);
        this.setState(()=>{
          return{binArClr:array}
        })
      }else if(this.state.size.includes(option) == true){
        let index = this.state.size.indexOf(option);
        let array = [...this.state.binArSiz];
        array = this.invertBits(array, index);
        this.setState(()=>{
          return{binArSiz:array}
        })
      }else{
        let index = this.state.styles.indexOf(option);
        let array = [...this.state.binArSty];
        array = this.invertBits(array, index);
        this.setState(()=>{
          return{binArSty:array}
        })
      }
    };

  handleCheckboxChange = event =>{
    this.setState({checked: event.target.checked})
  };

    //renders the HTML and javascript of the component
    render(){
        if(this.state.items.length>0){
            return(
                <section>
                  <div className="container">
                    {/*changes ststas based on the selected filters*/}
                        <div id="filter" onMouseUp={()=>{this.eventHandler()}}>
                          <ul>
                            {/*Type*/}
                            <li>Type <FontAwesomeIcon icon={faChevronDown}/>
                                <ul class="shop-dropdown">
                                    <li>Bespoke Base Pieces</li>
                                    <li>Purchase Pieces</li>
                                </ul>
                            </li>
                            {/*Collections*/}
                            <li>Collection <FontAwesomeIcon icon={faChevronDown}/>
                                <ul class="shop-dropdown">
                                  {this.state.collection.map((collection, index)=>{
                                    return(
                                      <li><button type="button" key={index} class="button" onMouseDown={()=>{
                                        this.handleItems(collection, "Col")
                                      }} >{collection}</button></li>
                                    )
                                  })}
                                </ul>
                              </li>
                              <div class="seperator"></div>
                              {/*Category*/}
                            <li>Category <FontAwesomeIcon icon={faChevronDown}/>
                              <ul class="shop-dropdown">
                                {this.state.categories.map((category, index)=>{
                                  return(
                                    <li><button type="button" key={index} class="button" onMouseDown={()=>{
                                      this.handleItems(category, "Cat")
                                    }} >{category}</button></li>
                                  )
                                })}
                              </ul>
                            </li>
                            <div class="seperator"></div>
                            {/*Colours*/}
                              <li>Colours <FontAwesomeIcon icon={ faChevronDown }/>
                                  <ul class="shop-dropdown">
                                    {this.state.colours.map((colour, index)=>{
                                      return(
                                      <li>
                                        <label onMouseDown={()=>this.handleFilterItems(colour)}><Checkbox key={index} checked={this.state.checked} onChange={this.handleCheckboxChange} class="checkbox"/><span>{colour}</span> </label>
                                        </li>
                                    )})}
                                  </ul>
                              </li>
                              <div class="seperator"></div>
                              {/*Styles*/}
                              <li>Styles <FontAwesomeIcon icon={ faChevronDown }/>
                                  <ul class="shop-dropdown">
                                    {this.state.styles.map((style, index)=>{
                                      return (
                                        <li>
                                        <label onMouseDown={()=>this.handleFilterItems(style)}><Checkbox key={index} checked={this.state.checked} onChange={this.handleCheckboxChange} class="checkbox"/><span>{style}</span> </label>
                                        </li>
                                      )
                                    })}
                                  </ul>
                              </li>
                              <div class="seperator"></div>
                              {/*Size*/}
                              <li>Size <FontAwesomeIcon icon={ faChevronDown }/>
                                  <ul class="shop-dropdown">
                                    {this.state.size.map((size, index)=>{
                                      return (
                                        <li>
                                        <label onMouseDown={()=>this.handleFilterItems(size)}><Checkbox key={index} checked={this.state.checked} onChange={this.handleCheckboxChange} class="checkbox"/><span>{size}</span> </label>
                                        </li>                                      )
                                    })}
                                  </ul>
                              </li>
                          </ul>
                        </div>
                      </div>
                    {/*renders the item thumbnails*/}
                  <div class="flex space_between grid product-container">
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
                </section>
            )
        }
        else{
            return(<section className="products py-5">
                <div className="contianer">
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-captialize">
                            <h1>Oh no! There's no items that match your filters :(</h1>
                        </div>
                    </div>
                </div>
            </section>)
        }
    }
}
