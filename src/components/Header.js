import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/menu.png')}
        style={{width: wp('7%'), height: hp('6%')}}
      />
      <Image
        source={require('../assets/images/share.png')}
        style={{width: wp('10%'), height: hp('5%'), marginLeft: wp('65%')}}
      />
      <Image
        source={require('../assets/images/cart.png')}
        style={{width: wp('10%'), height: hp('5%'), marginLeft: wp('2%')}}
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
  },
});

export default Header;
