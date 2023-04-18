import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity
} from "react-native"
import styles from "./footer.style"
import { icons } from "../../../constants"

const Footer = ({ url }) => {
  const {
    likeBtn,
    applyBtn,
    container,
    likeBtnImage,
    applyBtnText,
  } = styles;
  return (
    <View style={container}>
      <TouchableOpacity style={likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={likeBtnImage}

        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer