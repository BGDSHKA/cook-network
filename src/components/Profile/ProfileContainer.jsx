import React, { Component } from 'react'
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)

    }


    render() {        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent) 