import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

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
  const isLoading = false;
  const error = false;
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
            data={[1, 2, 3, 4]}
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