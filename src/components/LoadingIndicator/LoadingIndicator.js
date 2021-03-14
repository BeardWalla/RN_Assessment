import React from 'react';
import {View, Animated, Easing} from 'react-native';

import styles from './style';

export default class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.spinVal = new Animated.Value(0);
  }

  spinLoader(start) {
    if (!start) {
      Animated.timing(this.spinVal).stop();
      return;
    } else {
      this.spinVal.setValue(0);
      this.spinner = Animated.timing(this.spinVal, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
      }).start(() => this.spinLoader());

      this.spinValue = new Animated.Value(0);
    }
  }
  componentDidMount() {
    this.spinLoader(this.props.start);
  }

  render() {
    const spin = this.spinVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          useNativeDriver={true}
          style={{
            width: '15%',
            height: '10%',
            transform: [{rotate: spin}],
          }}
          source={require('../../assets/images/hourglass.png')}
        />
      </View>
    );
  }
}
