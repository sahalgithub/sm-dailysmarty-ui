import React, { Component } from 'react';

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size: 100,
            width : this.props.size ? this.props.size: 100,
        }
        return (
            <div className="logo-main">
                <img style={size} alt="daily smarty ui image logo big" src="/assets/image/ds_circle_logo.png"/>
            </div>
        )
    }
}

export default Logo;