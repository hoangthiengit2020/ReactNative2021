import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Story from '../../Components/Instagram/Story';
const Article = ({item}) => {
  const articleImage = Image.resolveAssetSource(item.img);
  const articleImageRatio = articleImage.width / articleImage.height;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerFeed}>
          <View style={[styles.user, {flexDirection: 'row'}]}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={[styles.name, {paddingLeft: 15}]}>{item.name}</Text>
          </View>
          <TouchableOpacity>
            <IconEntypo name="dots-three-horizontal" size={20}></IconEntypo>
          </TouchableOpacity>
        </View>
        <Image
          source={item.img}
          style={[styles.img, {aspectRatio: articleImageRatio}]}
        />
        <View style={styles.action}>
          <View style={styles.actionLeft}>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="heart" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="message-circle" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="send" size={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="bookmark" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.likeCount}>{item.likeCount}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
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
  headerFeed: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#777',
    borderTopWidth: 1,
    paddingRight: 13,
  },
  img: {
    width: '100%',
    height: null,
    resizeMode: 'contain',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingHorizontal: 8,
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
  },

  info: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  likeCount: {
    color: '#262626',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    color: '#8e8e8e',
    fontSize: 10,
    marginBottom: 5,
  },
});
