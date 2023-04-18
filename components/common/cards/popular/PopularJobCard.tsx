import styles from './popularjobcard.style';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress
}: any) => {
  const {
    jobName,
    location,
    container,
    logoImage,
    companyName,
    infoContainer,
    logoContainer,
  } = styles;
  const {
    job_title, 
    job_country,
    employer_name, 
    employer_logo, 
  } = item;
  return (
    <TouchableOpacity 
      style={container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={logoContainer(selectedJob, item)}
      >
        <Image
          source={{ uri: checkImageURL(employer_logo) ? employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg' }}
          resizeMode="contain"
          style={logoImage}
        />
        <Text style={companyName} numberOfLines={1}>{ employer_name }</Text>
      </TouchableOpacity>
      <View style={infoContainer}>
        <Text 
          style={jobName(selectedJob, item)}
          numberOfLines={1}
        >{ job_title }</Text>
        <Text style={location}>{ job_country }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard