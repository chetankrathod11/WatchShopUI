import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Titan',
    price: '$100',
    image: (
      <Image
        source={require('../assets/images/watch1.png')}
        style={{
          width: wp('22%'),
          height: hp('20%'),
        }}
      />
    ),
  },
  {
    id: 2,
    title: 'Fossil',
    price: '$120',
    image: (
      <Image
        source={require('../assets/images/watch2.png')}
        style={{
          width: wp('22%'),
          height: hp('20%'),
        }}
      />
    ),
  },
  {
    id: 3,
    title: 'Casio',
    price: '$150',
    image: (
      <Image
        source={require('../assets/images/watch3.png')}
        style={{
          width: wp('26%'),
          height: hp('20%'),
        }}
      />
    ),
  },
  {
    id: 4,
    title: 'Sonata',
    price: '$80',
    image: (
      <Image
        source={require('../assets/images/watch4.png')}
        style={{
          width: wp('28%'),
          height: hp('20%'),
        }}
      />
    ),
  },
];

const List = () => {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: hp('1%'),
          }}>
          {item.image}
          <Text style={{fontSize: hp('3%')}}>{item.title}</Text>
          <Text style={{fontSize: hp('2%')}}>{item.price}</Text>
        </View>
      )}
    />
  );
};

export default List;
