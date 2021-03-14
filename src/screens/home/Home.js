import React from 'react';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import {connect} from 'react-redux';
import {getUsersList} from '../../reducers/home/homeReducer';
import {HomeActions, setUserProfile} from '../../actions/home/homeActions';
import styles from './style';
import constants from '../../utils/constants';
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    this.props.getUsers();
    this.setState({
      isLoading: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users != this.props.users) {
      this.setState({
        isLoading: false,
      });
    }
  }
  onPressAction = item => {
    console.info('item => ', item.id);
    this.props.setUserProfile(item);
    this.props.navigation.navigate(constants.screen.USER_DETAILS, {
      userInfo: item,
    });
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.info('item => ', item);
          this.props.setUserProfile(item);
          this.props.navigation.navigate(constants.screen.USER_DETAILS, {
            userInfo: item,
          });
        }}>
        <View style={styles.pressable}>
          <Image
            style={styles.image}
            source={{uri: constants.url.getProfileImage + item.id}}
          />
          <Text style={styles.name}>{item.name}</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../assets/images/next.png')}
          />
        </View>
        <View style={styles.borderBottom} />
      </TouchableOpacity>
    );
  };

  render() {
    const {users} = this.props;
    const {isLoading} = this.state;
    if (isLoading) {
      return <LoadingIndicator start={isLoading} />;
    }

    return (
      <FlatList
        data={users}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: getUsersList(state),
});

const mapDispatchToProp = dispatch => ({
  getUsers: () => dispatch({type: HomeActions.GET_USERS}),
  setUserProfile: userProfile => dispatch(setUserProfile(userProfile)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Home);
