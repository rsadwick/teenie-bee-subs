import React from 'react'
import {SubscriptionConsumer} from '../components/SubscriptionProvider';

export default class RingSizes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SubscriptionConsumer>
                {({ ringSizeCollection, handleRingSizeChange }) => (
                    
                    <ul>
                    <h3>Ring Size</h3>
                    {ringSizeCollection.map((ring, index) => (
                        <li key={index}>
                            <label>
                                <input type="radio" name="ringSize" 
                                    value={ring.size}
                                    onClick={() => handleRingSizeChange(ring.size)}
                                />
                                {ring.size}
                            </label> 
                      
                        </li>
                    ))}
                    </ul>
                )}
            </SubscriptionConsumer>
        )
    }
}