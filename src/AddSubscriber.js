import React, { Component } from 'react'
import Header from './common/Header';
import './common/common.css';
import './AddSubscriber.css';
import { Link } from 'react-router-dom';

class AddSubscriber extends Component {
  
  constructor() {
      super();
      this.state = {
          id: 0,
          name: '',
          phone: ''
      }
  }
  
  inputChangedHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({ id: 0, name: '', phone: ' ' });
    this.props.history.push("/");
  }


  render() {

    const {name, phone} = this.state;

    return (
        <div className="component-container">

            <Header heading="Add Subscriber"/>
            <div className="component-body-container">
                <Link to="/"><button className="custom-btn">Back</button></Link>

                <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>   
                    <label htmlFor="name" className="label-control">Name:</label><br />
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/><br /><br />
                    <label htmlFor="phone" className="label-control">Phone:</label><br />
                    <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/><br /><br />
                
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
                        <span className="subscriber-info">Name: {name}</span><br />
                        <span className="subscriber-info">Phone: {phone}</span>
                    </div>

                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>
        </div>
    )
  }
}

export default AddSubscriber;




// import React from 'react'
// import { useState } from 'react/cjs/react.production.min';

// const AddSubscriber = (props) => {

// const [name, setName] = useState("");
// const [phone, setPhone] = useState("");

// const inputChangedHandler = (e) => {
//   if(e.target.name === "name"){
//     setName(e.target.value);
//   } else {
//     setPhone(e.target.value);
//   }
// }
// const onFormSubmitted = (e) => {
//   e.preventDefault();
//   props.onAddSubscriber({id: 0, name: name, phone: phone});
// }

//   return (
//     <div className="component-container">
//       <Header heading="Add Subscriber"/>
//       <div className="component-body-container">
//         <Link to="/"><button className="custom-btn">Back</button></Link>
//         <form className="subscriber-form" onSubmit={onFormSubmitted}>   
//           <label htmlFor="name" className="label-control">Name:</label><br />
//           <input id="name" type="text" className="input-control" name="name" onChange={inputChangedHandler}/><br /><br />
//           <label htmlFor="phone" className="label-control">Phone:</label><br />
//           <input id="phone" type="text" className="input-control" name="phone" onChange={inputChangedHandler}/><br /><br />
//           <div className="subscriber-info-container">
//             <span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
//             <span className="subscriber-info">Name: {name}</span><br />
//             <span className="subscriber-info">Phone: {phone}</span>
//           </div>
//           <button type="submit" className="custom-btn add-btn">Add</button>
//         </form>
//       </div>
//     </div>
//   )
// }


