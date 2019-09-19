import React from 'react'
import {SubscriptionConsumer} from '../components/SubscriptionProvider';

export default class StatusBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SubscriptionConsumer>

                {({stripeErrorMessage}) => {
                    console.log(stripeErrorMessage);
                    if(stripeErrorMessage && stripeErrorMessage !== ''){
                        return <div className="status-bar">
                           <p>{stripeErrorMessage}</p>                 
                        </div>
                    }
                    return null;
                  
                }}
            </SubscriptionConsumer>
        )
    }
}