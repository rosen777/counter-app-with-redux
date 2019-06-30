import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
    increaseCount,
    decreaseCount
} from '../Actions/Counter'

class Counter extends Component {

static mapStateToProps = state => {
    return {
        count: state.count
    }
}

static mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increaseCount,
        decreaseCount
    },
    dispatch
    )
}

render() {
    const { increaseCount, decreaseCount } = this.props

    return(
        <div>
        <Button onClick={increaseCount} >+</Button>
        <span>{this.props.count}</span>
        <Button onClick={decreaseCount}>-</Button>
        </div>
    )
}

}

export default connect(
    Counter.mapStateToProps,
    Counter.mapDispatchToProps
)(Counter)