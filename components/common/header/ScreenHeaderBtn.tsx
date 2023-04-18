import React, { FC } from 'react';
import styles from './screenheader.style';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface Props { }

const ScreenHeaderBtn: FC<any> = ({
  iconUrl,
  dimension,
  handlePress
}) => {
  const { btnImg, btnContainer } = styles;
  return (
    <TouchableOpacity style={btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style={btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
