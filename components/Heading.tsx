import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    paddingLeft: 22,
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#CC7861',
  },
});

export default Heading;
