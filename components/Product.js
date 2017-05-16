import React from 'react';

class Product extends React.Component{
  render(){
    return  (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.producer}</div>
        <div>{this.props.hasWatermark}</div>
        <div>{this.props.color}</div>
        <div>{this.props.weight}</div>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props,propName)=>{
    let weight = props[propName]
    let validWeight = weight > 80 && weight < 300

    if(weight === undefined){
      return new Error("weight prop is required")
    }
    if(isNaN(weight)){
      return new Error('weight must be a number')
    }
    if(!validWeight){
      return new Error('weight must be between 80 & 300')
    }
  }
}

export default Product;
