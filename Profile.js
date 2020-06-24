import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';


const rows = [
  { image: 'https://2sao.vietnamnetjsc.vn/2015/12/04/16/18/004.jpg', text: 'The Silence of the Lambs' },
  { image: 'https://anh.eva.vn/upload/1-2017/images/2017-02-13/10-loi-thoai-lang-man-den-mem-tim-trong-nhung-bo-phim-tinh-cam-hay-nhat-moi-thoi-dai-phim-kinh-dien-02-eva-vn-1486953267-width500height700.jpg', text: 'The Girl with the Dragon Tattoo'},
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8fXu0dhM9kKH_F537tfC4rathuLXNDbyoX6kOLPHLBNxj1-cW&usqp=CAU', text: 'Kiss the Girls'},
  { image: 'https://www.elle.vn/wp-content/uploads/2017/10/19/elle-viet-nam-top-20-bo-phim-tinh-cam-1.jpg', text: 'In Cold Blood' },
  { image: 'https://wallstreetenglish.edu.vn/files/images/blog-images/nhung-bo-phim-giup-luyen-nghe-tieng-anh/nhung-bo-phim-giup-luyen-nghe-tieng-anh-2.png', text: 'The Da Vinci Code' },
]
export function Profile({ navigation }) {
  renderItem = ({ item }) => {
    return (
      <View style={styles, {
        borderWidth: 1,
      }}>
        <Image style={styles.image}
          source={{ uri: item.image }}></Image>
        <Text style={styles, {
          marginTop: -80,
          fontSize: 25,
          color: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 150
        }}
        onPress={() => navigation.navigate('chitiet', { name: 'decd' })}
        >{item.text}</Text>
        <TouchableOpacity>
          <Image
            style={styles.images}
            source={{ uri: item.images }}
            onPress={() => navigation.navigate('chitiet', { name: 'decd' })}
          ></Image>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        renderItem={this.renderItem}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    marginLeft: 300,
    width: 100,
    height: 100,
  }
})