import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  // styles
  const {
    tab,
    tabText,
    userName, 
    container, 
    searchBtn,
    searchInput,
    tabsContainer,
    searchWrapper,
    welcomeMessage, 
    searchBtnImage,
    searchContainer, 
  } = styles;
  // -
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState<string>("Full-time");

  return (
    <View>
      <View style={container}>
        <Text style={userName}>Hello Bilguun</Text>
        <Text style={welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={searchContainer}>
        <View style={searchWrapper}>
          <TextInput 
            style={searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={tab(activeJobType, item)} onPress={() => {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
              <Text style={tabText(activeJobType, item)}>{ item }</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome