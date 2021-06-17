import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import axios from 'axios';

// const DATA = [
//   {
//     id: 1,
//     title: 'Titan',
//     price: '$100',
//     image: require('../assets/images/watch1.png'),
//   },
//   {
//     id: 2,
//     title: 'Fossil',
//     price: '$120',
//     image: require('../assets/images/watch2.png'),
//   },
//   {
//     id: 3,
//     title: 'Casio',
//     price: '$150',
//     image: require('../assets/images/watch3.png'),
//   },
//   {
//     id: 4,
//     title: 'Sonata',
//     price: '$80',
//     image: require('../assets/images/watch4.png'),
//   },
// ];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: hp('1%'),
      }}>
      <Image source={DATA.Image} style={styles.image} />
      <Text style={{fontSize: hp('3%')}}>{item.title}</Text>
      <Text style={{fontSize: hp('2%')}}>{item.price}</Text>
    </View>
  );
};

const List = () => {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({item}) => renderItem({item})}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  image: {
    width: wp('22%'),
    height: hp('20%'),
  },
});
