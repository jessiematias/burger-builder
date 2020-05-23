import React, {Component} from 'react';
import './Model.styles.css'
import Backdrop from '../Backdrop/Backdrop.component'

class Model extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show
    }

    render () {
        return (
            <>
            <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
            <div className='Model' 
            style ={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'
        }}>
                {this.props.children}
            </div>
            </>
        
        )
    }
}


export default Model