import React, { Component } from 'react';

import Profile from './Profile';



class ProfileContainer extends Component {

    render() {
        if (this.props.data.loading) return <Loader />;
        return (
           
                <div>
                </div>
           
        );
    }
}

