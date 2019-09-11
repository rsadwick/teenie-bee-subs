import React, { Component } from 'react'
import * as _ from 'lodash';


/* First we will make a new context */
const SubscriptionContext = React.createContext()

/* Then create a provider Component */
class SubscriptionProvider extends Component {
    constructor(props) {
        super(props);

        this.handleSubscriptionChange = this.handleSubscriptionChange.bind(this);

        this.state = {
          subscriptions: [],
          selectedSubscription: {}
      };
    }

    componentDidMount() {
       this.setState({subscriptions: this.props.subscriptions});
    }

    componentDidUpdate() {
      
    }

    handleSubscriptionChange = sku => {
        let subscriptions = this.state.subscriptions;
        let selectedSubscription = _.find(subscriptions, { sku: sku});
        this.setState({ selectedSubscription: selectedSubscription });
    }

    render () {
        return (
        <SubscriptionContext.Provider
            value={{
                subscriptions: this.state.subscriptions,
                selectedSubscription: this.state.selectedSubscription

            }}>
        
            {this.props.children}
        </SubscriptionContext.Provider>
        )
    }
}

const SubscriptionConsumer = SubscriptionContext.Consumer

export default SubscriptionProvider
export { SubscriptionConsumer }