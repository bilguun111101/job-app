import {
  Text,
  View
} from 'react-native';
import styles from './about.style';

const About = ({ info }) => {
  const {
    headText,
    container,
    contentBox,
    contextText,
  } = styles;
  return (
    <View style={container}>
      <Text style={headText}>About the job:</Text>
      <View style={contentBox}>
        <Text style={contextText}>{ info }</Text>
      </View>
    </View>
  )
}

export default About