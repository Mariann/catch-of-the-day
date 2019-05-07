import React from "react";
import { formatPrice } from "../helpers";
import { DESTRUCTION } from "dns";

class EditFishFrom extends React.Component {
   handleChange = (event) => {
       console.log(event.currentTarget.value)
       const updateFish = {
           ...this.props.fish,
        [event.currentTarget.name]: event.currentTarget.value 
        };
       console.log(updateFish);
       this.props.updateFish(this.props.index, updateFish)
   } 

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unaviailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}

export default EditFishFrom;
