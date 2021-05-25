import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MainContent = () => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={[styles.contentContainer, {backgroundColor: 'crimson'}]}>
        <Text style={[styles.text, {color: '#fff'}]}>Trending</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <Text style={styles.text}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <Text style={styles.text}>We Recommend</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    height: hp('12%'),
    justifyContent: 'space-around',
    marginTop: hp('2%'),
    marginHorizontal: hp('2%'),
  },
  text: {
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  contentContainer: {
    height: hp('6%'),
    width: wp('30%'),
    margin: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default MainContent;
