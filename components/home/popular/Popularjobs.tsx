import React from 'react';
import { useRouter } from 'expo-router';
import { useFetch } from '../../../hooks';
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";

const Popularjobs = () => {
  // styles
  const {
    header,
    container,
    headerBtn,
    headerTitle,
    cardsContainer,
  } = styles;
  // -

  const router = useRouter();
  const {
    data,
    error,
    refetch,
    isLoading
  } = useFetch('search', {
    query: 'React developer',
    num_page: 1
  });
  return (
    <View style={container}>
      <View style={header}>
        <Text style={headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={cardsContainer}>
        {isLoading ?
          <ActivityIndicator size="large" color={COLORS.primary}  />
            : error ?
          <Text>Something went wrong</Text>
            :
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        }
      </View>
    </View>
  )
}

export default Popularjobs