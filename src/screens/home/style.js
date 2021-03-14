import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {backgroundColor: '#F3F3F3', marginLeft: 20, margin: 20},
  pressable: {flex: 1, flexDirection: 'row', marginTop: 5},
  listItem: {},
  image: {
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'stretch',
    width: '15%',
    height: 60,
  },
  name: {
    textAlignVertical: 'center',
    padding: 0,
    width: '45%',
    height: 60,
    marginLeft: 20,
    marginRight: 40,
    marginBottom: 20,
  },
  rightArrow: {
    marginTop: 30,
    marginRight: 80,
    resizeMode: 'cover',
    width: '7%',
    height: 20,
  },
  borderBottom: {
    width: '100%',
    height: '1%',
    backgroundColor: 'grey',
  },
});

export default styles;
