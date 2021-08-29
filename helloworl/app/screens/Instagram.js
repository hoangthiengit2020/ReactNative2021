import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

import Article from '../../Components/Instagram/Article';
import Story from '../../Components/Instagram/Story';

import {stories, articles} from '../../Components/Instagram/data.js';

import Header from './Header';
const Instagram = () => {
  const renderItem = ({item, index}) => {
    if (index == 0) {
      return (
        <View style={styles.aticler}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {stories.map((item, index) => (
              <Story key={index} avatar={item.avatar} name={item.name} />
            ))}
          </ScrollView>
        </View>
      );
    }
    return (
      <Article
        item={{
          avatar: item.avatar,
          name: item.name,
          img: item.image,
          likeCount: item.likeCount,
          date: item.date,
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header />
      </View>

      {/* <ScrollView> */}
      {/* <View style={styles.aticler}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map((item, index) => (
            <Story key={index} avatar={item.avatar} name={item.name} />
          ))}
        </ScrollView>
      </View> */}
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {/* end 1khoi */}
      {/* {articles.map((item, index) => (
          <Article
            key={index}
            item={{
              avatar: item.avatar,
              name: item.name,
              img: item.image,
              likeCount: item.likeCount,
              date: item.date,
            }}
          />
        ))} */}

      {/* end */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Instagram;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    height: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Goldena',
    // fontSize: 25,
  },
  user: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
  },
});

