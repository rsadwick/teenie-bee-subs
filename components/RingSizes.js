import React from 'react'
import {SubscriptionConsumer} from '../components/SubscriptionProvider';

export default class RingSizes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SubscriptionConsumer>
                {({ handleRingSizeChange }) => (
                    <div>
                            <label>
                                <input type="radio" name="ringSize" value="5"/>
                                5
                            </label> 
                            <label>
                                <input type="radio" name="ringSize" value="5"/>
                                6
                            </label> 
                            <label>
                                <input type="radio" name="ringSize" value="5"/>
                                7
                            </label> 
                            <label>
                                <input type="radio" name="ringSize" value="5"/>
                                8
                            </label> 
                            <label>
                                <input type="radio" name="ringSize" value="5"/>
                                9
                            </label> 
                           
                    </div>
                )}
            </SubscriptionConsumer>
        )
    }
}