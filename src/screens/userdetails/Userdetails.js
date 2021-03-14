import React from 'react';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {getUserData} from '../../reducers/home/homeReducer';
import constants from '../../utils/constants';

import style from './style';

export class Userdetails extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUserImage = id => {
    return (
      <View style={style.profileImage}>
        <Image
          style={style.imageStyle}
          source={{uri: constants.url.getProfileImage + id}}
        />
      </View>
    );
  };
  render() {
    const {userInfo} = this.props.route.params;
    const {id, name, phone, email, username, address, company, website} = this
      .props.userProfile
      ? this.props.userProfile
      : userInfo;
    return (
      <View style={style.content}>
        {id && this.renderUserImage(id)}
        {name && <Text style={style.userProfile}>Name: {name}</Text>}
        {phone && <Text style={style.userProfile}>Contact: {phone}</Text>}
        {email && <Text style={style.userProfile}>Email: {email}</Text>}
        {username && (
          <Text style={style.userProfile}>Username: {username}</Text>
        )}
        {company && company.bs && (
          <Text style={style.userProfile}>Company: {company.bs}</Text>
        )}
        {address.suite && address.street && address.city && address.zipcode ? (
          <Text style={style.userProfile}>
            Address: {address.suite}, {address.street},{address.city},
            {address.zipcode}
          </Text>
        ) : (
          <Text style={style.userProfile}>
            City of residence: {address.city}
          </Text>
        )}
        {website && <Text style={style.userProfile}>Portfolio: {website}</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: getUserData(state),
});

const mapDispatchToProp = dispatch => ({
  getUsers: () => dispatch({type: HomeActions.GET_USERS}),
});

export default connect(mapStateToProps, mapDispatchToProp)(Userdetails);
