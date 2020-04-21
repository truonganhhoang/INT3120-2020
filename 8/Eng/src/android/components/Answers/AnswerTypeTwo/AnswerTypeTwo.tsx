import React from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native'; 
import { Image } from 'react-native-elements'; 
import firebase from 'firebase'; 
import styles from './styles'; 

const AnswerTypeTwo = (props: { content?: any; lessonInfo?: any }) => {
  const { content, lessonInfo } = props; 
  const database = firebase.database(); 
  const result =  database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
  '/results/' + content.id);

  function onPress(selected: any) {
    // console.log(selected); 
    result.on('value', function(snapshot: any){
      // console.log(snapshot); 
      if (snapshot.val().text == selected) {
        console.log("True"); 
        console.log(snapshot); 
      } else {
        console.log("False"); 
      }
    })
  }

  return (
    <View>
      <Text>
        Answer Type Two
      </Text>
      <View>
        <TouchableOpacity
          style={styles.view_a}
          onPress={() => onPress('a')}
        >
          <Image
            source={{ uri: content.content_a }}
            containerStyle={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.view_b}
          onPress={() => onPress('b')}
        >
          <Image
            source={{ uri: content.content_b }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.view_c}
          onPress={() => onPress('c')}
        >
          <Image
            source={{ uri: content.content_c }}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view_d}
          onPress={() => onPress('d')}
        >
          <Image
            source={{ uri: content.content_d }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AnswerTypeTwo; 