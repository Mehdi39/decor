// Package imports
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Icon = ({ imgSource }) => {
  return <Image source={imgSource}></Image>;
};

const styles = StyleSheet.create({
  img: {
    width: 'auto',
    height: 'auto',
  },
});

export default Icon;
