import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/menu.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Todo</Text>
      <Image
        source={require('../assets/images/share.png')}
        style={[styles.image, {width: 34, marginLeft: wp('36%')}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: hp('8%'),
    width: wp('100%'),
    padding: wp('2%'),
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  image: {
    width: wp('5%'),
    height: hp('5%'),
    borderRadius: 3,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 135,
  },
});

export default Header;
