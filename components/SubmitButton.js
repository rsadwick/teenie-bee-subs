import React from 'react'
import {SubscriptionConsumer} from '../components/SubscriptionProvider';

export default class SubmitButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SubscriptionConsumer>
                {({ handleSubmit }) => (      
                   <div>
                       <button onClick={handleSubmit}>Submit</button>                    
                   </div>
                )}
            </SubscriptionConsumer>
        )
    }
}