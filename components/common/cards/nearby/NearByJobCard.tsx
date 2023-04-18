import styles from './nearbyjobcard.style';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { checkImageURL } from '../../../../utils';

const NearByJobCard = ({
  job,
  handleNavigate
}: any) => {
  const {
    jobType,
    jobName,
    logImage,
    container,
    textContainer,
    logoContainer,
  } = styles;
  const {
    job_title, 
    // job_country,
    // employer_name, 
    employer_logo, 
    job_employment_type,
  } = job;
  return (
    <TouchableOpacity 
      style={container}
      onPress={handleNavigate}
    >
      <TouchableOpacity
        style={logoContainer}
      >
        <Image
          source={{ uri: checkImageURL(employer_logo) ? employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg' }}
          resizeMode="contain"
          style={logImage}
        />
      </TouchableOpacity>

      <View style={textContainer}>
        <Text 
          style={jobName}
          numberOfLines={1}
        >{ job_title }</Text>
        <Text style={jobType}>{ job_employment_type }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearByJobCard;