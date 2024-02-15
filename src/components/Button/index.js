import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
const Button = ({onPress, children, type}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'blue' ? styles.blueBg : {}]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
