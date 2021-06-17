import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// import styles from './ApiViewStyles';

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.callApi();
  }
  async callApi() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/');
    let respJson = await resp.json();
    this.setState({data: respJson});
  }
  renderItem = ({item}) => (
    <TouchableOpacity style={{margin: 5}}>
      {/* <View style={styles.borderLineStyle}></View> */}
      <View style={styles.containerStyle}>
        <View style={styles.notificationBodyViewStyle}>
          <Text style={styles.titleTextStyle}> Title: {item.title}</Text>
          <View style={styles.subtitleAndTimeViewStyle}>
            <Text style={styles.subTitleTextStyle}>
              Status: {item.status ? 'Completed' : 'Incomplete'}
            </Text>
            <Text style={styles.timeTextStyle}>Todo ID: {item.id}</Text>
          </View>
        </View>
      </View>
      <View style={styles.borderLineBottomStyle}></View>
    </TouchableOpacity>
  );

  render() {
    // console.log('render', this.state.data);
    return (
      <View>
        <FlatList data={this.state.data} renderItem={this.renderItem} />
      </View>
    );
  }
}

export default Api;

const styles = StyleSheet.create({
  containerStyle: {
    height: hp('4'),
    marginTop: hp('5.5'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  borderLineStyle: {
    height: wp('.05'),
    width: wp('90'),
    marginLeft: wp('4'),
    marginTop: hp('2'),
    backgroundColor: '#6C6C6C',
    position: 'absolute',
  },
  titleTextStyle: {
    fontSize: wp('5'),
  },
  subTitleTextStyle: {
    color: '#6C6C6C',
    fontSize: wp('3'),
    marginTop: hp('.8'),
  },
  imageStyle: {
    height: hp('5.5'),
    width: wp('12'),
    marginLeft: wp('-8'),
    marginRight: wp('-20'),
  },
  notificationBodyViewStyle: {
    marginRight: wp('0'),
    // backgroundColor: 'teal',
    width: wp('60'),
  },
  timeTextStyle: {
    color: '#AEAEAE',
    fontSize: wp('3'),
    marginTop: hp('.7'),
    marginLeft: wp('26'),
  },
  subtitleAndTimeViewStyle: {
    // backgroundColor: 'white',
    height: hp('3'),
    width: wp('70'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  borderLineBottomStyle: {
    height: wp('.05'),
    width: wp('90'),
    marginHorizontal: wp('2'),
    marginTop: hp('15'),
    backgroundColor: '#6C6C6C',
    position: 'absolute',
  },
});
