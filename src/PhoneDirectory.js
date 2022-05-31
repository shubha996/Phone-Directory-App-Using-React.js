import React, { Component } from 'react'
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
     
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Shilpa Bhat",
                    phone: "9999999999"
                },
                {
                    id: 2,
                    name: "Srishti Gupta",
                    phone: "8888888888"
                }
            ]
        };
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
          newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }
    
    render() {
        
        return (
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler.bind(this)} /> }  />
                    <Route path='/add' render={({history}, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler.bind(this)} /> } />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;



// import React from 'react'
// import { useState } from 'react/cjs/react.production.min';

// const PhoneDirectory = () => {

// const [subscribersList, setSubscribersList] = useState([
//     {
//         id: 1,
//         name: "Shilpa Bhat",
//         phone: "9999999999"
//     },
//     {
//         id: 2,
//         name: "Srishti Gupta",
//         phone: "8888888888"
//     }
// ]);

// const deleteSubscriberHandler = (subscriberId) => {
//     let subscriberIndex = 0;
//     subscribersList.forEach(function (subscriber, index) {
//         if (subscriber.id === subscriberId) {
//             subscriberIndex = index;
//         }
//     });
//     let newSubscribers = subscribersList;
//     newSubscribers.splice(subscriberIndex, 1);
//     setSubscribersList(newSubscribers);
// }

// const addSubscriberHandler = (newSubscriber) => {
//     let subscribersListTemp = subscribersList;
//     if (subscribersListTemp.length > 0) {
//         newSubscriber.id = subscribersListTemp[subscribersListTemp.length - 1].id + 1;
//     } else {
//         newSubscriber.id = 1;
//     }
//     subscribersListTemp.push(newSubscriber);
//     setSubscribersList(subscribersListTemp);
// }

//   return (
//     <div>
//         <Router>
//             <div>
//                 <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={subscribersList} deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} /> }  />
//                 <Route path='/add' render={({history}, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={(newSubscriber) => addSubscriberHandler(newSubscriber)} /> } />
//             </div>
//         </Router>
//     </div>
//   )
// }
