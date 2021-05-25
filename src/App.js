import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header';
import MainContent from './components/MainContent';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{padding: wp('3%')}}>
        <Text style={{fontSize: wp('8%'), fontWeight: 'bold'}}>
          Discover our exclusive watches
        </Text>
      </View>
      <MainContent />

      <List />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: hp('100%'),
  },
});

export default App;
