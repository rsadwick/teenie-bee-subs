import React, { Component } from 'react'
import * as _ from 'lodash';

const SubscriptionContext = React.createContext()

class SubscriptionProvider extends Component {
    constructor(props) {
        super(props);

        this.handleSubscriptionChange = this.handleSubscriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
          subscriptions: [],
          selectedSubscription: {},
          ringSize: 0,
          ringSizeCollection: []
      };
    }

    componentDidMount() {
        this.setState({
            subscriptions: this.props.subscriptions,
            ringSizeCollection: this.props.ringSizeCollection
        });
      
    }

    componentDidUpdate() {
      
    }

    handleSubscriptionChange = sku => {
        let subscriptions = this.state.subscriptions;
        let selectedSubscription = _.find(subscriptions, { sku: sku});
        this.setState({ selectedSubscription: selectedSubscription });
    }

    handleRingSizeChange = size => {
        this.setState({ringSize: size});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let stripe = Stripe('pk_test_iN9qaP9mIVtUCc9Yp9BHRji000m5JAbZ35');
            stripe.redirectToCheckout({
                items: [{plan: this.state.selectedSubscription.sku, quantity: 1}],
                successUrl: 'https://3ee.com/',
                cancelUrl: 'https://3ee.com/games',
                
            })
            .then(function (result) {
                if (result.error) {
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
        });
          
    }
    
    render () {
        return (
        <SubscriptionContext.Provider
            value={{
                subscriptions: this.state.subscriptions,
                selectedSubscription: this.state.selectedSubscription,
                ringSize: this.state.ringSize,
                ringSizeCollection: this.state.ringSizeCollection,
                handleRingSizeChange: this.handleRingSizeChange,
                handleSubscriptionChange: this.handleSubscriptionChange,
                handleSubmit: this.handleSubmit

            }}>
        
            {this.props.children}
        </SubscriptionContext.Provider>
        )
    }
}

const SubscriptionConsumer = SubscriptionContext.Consumer

export default SubscriptionProvider
export { SubscriptionConsumer }