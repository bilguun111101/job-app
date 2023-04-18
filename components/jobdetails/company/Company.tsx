import styles from "./company.style";
import { View, Text, Image } from "react-native";

import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({
  location,
  jobTitle,
  companyLogo,
  companyName,
}) => {
  const {
    logoBox,
    logoImage,
    container,
    locationBox,
    jobTitleBox,
    locationName,
    locationImage,
    companyInfoBox,
    jobTitle: jobtitle,
  } = styles;
  return (
    <View style={container}>
      <View style={logoBox}>
        <Image
          source={{ uri: checkImageURL(companyLogo) ? companyLogo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" }}
          style={logoImage}
        />
      </View>

      <View style={jobTitleBox}>
        <Text style={jobtitle}>{ jobTitle }</Text>
      </View>

      <View style={companyInfoBox}>
        <Text>{ companyName } / </Text>
        <View style={locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={locationImage}
          />
          <Text style={locationName}>{ location }</Text>
        </View>
      </View>
    </View>
  )
}

export default Company