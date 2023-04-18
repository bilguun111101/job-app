import {
  View,
  Text,
} from "react-native";
import styles from "./specifics.style";

const Specifics = ({
  title,
  points,
}) => {
  const {
    pointDot,
    container,
    pointText,
    pointWrapper,
    pointsContainer,
    title: title_style,
  } = styles;
  return (
    <View style={container}>
      <Text style={title_style}>{ title }:</Text>

      <View style={pointsContainer}>
        { points.map((item, index) => (
          <View style={pointWrapper} key={index}>
            <Text style={pointDot} />
            <Text style={pointText}>{ item }</Text>
          </View>
        )) }
      </View>
    </View>
  )
}

export default Specifics