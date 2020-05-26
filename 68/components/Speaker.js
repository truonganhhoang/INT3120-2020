import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import speakerImg from '../assets/icons8-speaker-40.png';

export default function Speaker({ Text }) {
  const speaker = () => {
    Speech.speak(Text, { language: 'ja' });
  };
  return (
    <TouchableOpacity
      onPress={() => speaker()}
      style={{}}
    >
      <Image source={speakerImg} style={{ width: 25, height: 25 }} />
    </TouchableOpacity>
  );
}
