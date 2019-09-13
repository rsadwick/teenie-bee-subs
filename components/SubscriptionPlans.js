import React from 'react'
import {SubscriptionConsumer} from '../components/SubscriptionProvider';

export default class SubscriptionPlans extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SubscriptionConsumer>
                {({ subscriptions, handleSubscriptionChange }) => (
                    <ul>
                        <h3>Subscription Plan</h3>
                        {subscriptions.map((subscription, index) => (
                            <li key={index}>
                                 <label>
                                    <input type="radio" name="subscriptionType" 
                                        value={subscription.sku}
                                        onClick={() => handleSubscriptionChange(subscription.sku)}
                                    />
                                    {subscription.title}
                                </label> 
                               <p>{subscription.billingInfo}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </SubscriptionConsumer>
        )
    }
}