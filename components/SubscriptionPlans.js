import React from 'react'
import {SubscriptionConsumer} from '../components/SubscriptionProvider';

export default class SubscriptionPlans extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SubscriptionConsumer>
                {({ subscriptions }) => (
                    <ul>
                        {subscriptions.map((subscription, index) => (
                            <li key={index}>
                                <p>{subscription.title}</p>
                                <p>{subscription.price}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </SubscriptionConsumer>
        )
    }
}