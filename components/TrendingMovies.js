import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'

var {width, height} = Dimensions.get('window')

export default function TrendingMovies({data, title}){
const navigation = useNavigation();
  const handleClick = (item)=> {
    navigation.navigate('Movie', item)
  };
  
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5" style={{color: 'white', fontSize: 20, marginBottom: 20, marginHorizontal: 16}}>{title}</Text>

      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        className="flex items-center"
      />
    </View>
  )
}


const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback
      onPress={()=> handleClick(item)}>
      <Image
        source={require('../images/9(phone).jpg')}
        style={{
          width: width*0.6,
          height: height*0.4
          }}
          className="rounded-3xl"
      />    
    </TouchableWithoutFeedback>
  )
}