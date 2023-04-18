import React from 'react';
import { useRouter } from 'expo-router';
import styles from './nearbyjobs.style';
import { useFetch } from '../../../hooks';
import { COLORS } from '../../../constants';
import NearByJobCard from '../../common/cards/nearby/NearByJobCard';
import { ActivityIndicator, TouchableOpacity, View, Text } from "react-native";

const Nearbyjob = () => {
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
        <Text style={headerTitle}>Nearby jobs</Text>
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
          <>
            { data?.map((job) => (
                <NearByJobCard
                  job={job}
                  key={`nearby-job-${job?.job_id}`}
                  handleNavigate={() => router.push(`job-details/${job.job_id}`)}
                />
              )
            )}
          </>
        }
      </View>
    </View>
  )
}

export default Nearbyjob;