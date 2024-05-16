import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View, Image } from 'react-native';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return (
    <FontAwesome size={28} style={styles.tabBarIcon} {...props} />
    // <View style={styles.container}>
    //   <Image style={styles.imageView} source={require('./icons/bed.png')} />
    // </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  imageView: {
    flex: 1,
    width: 80,
    height: 20,
  },

  tabBarIcon: {
    marginBottom: -3,
  },
});
