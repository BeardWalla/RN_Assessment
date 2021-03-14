import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  content: {flexDirection: 'column', margin: 20},
  profileImage: {width: '100%'},
  imageStyle: {
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    alignSelf: 'center',
    resizeMode: 'stretch',
    width: '70%',
    height: 200,
  },
  userProfile: {fontSize: 18, marginBottom: 5},
});

export default style;
