
import React, { Component } from 'react';
import { Text, View,Button,Alert,StyleSheet,Linking } from 'react-native';
import { Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Home extends Component {
  render() {
    return (
      <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bài Tập Ngữ Pháp Tiếng Anh Có Giải Thích{'\n'}</Text>
      
        
         
         
      </View>
      <View>
        
      <Button
          title="Học ngữ pháp"
           onPress={() => Alert.alert('Học ngữ pháp')}
         />
         
      </View>
      <Separator/>
      <View>
      <Text>{'\n'}</Text>
      <Button
          title="Bài tập ngữ pháp"
           onPress={() => Alert.alert('Bài tập ngữ pháp')}
         />
      </View>
      <Separator/>
      <View>  
      <Text>{'\n'}</Text>
         <Button
          title="Học từ vựng"
           onPress={() => Alert.alert('Học từ vựng')}
         />
       </View>
       <Separator/>
       <View>
       <Text>{'\n'}</Text>

         <Button
          title="Kiểm tra ngữ pháp"
           onPress={() => Alert.alert('Kiểm tra ngữ pháp')}
         />
        </View>  
         <Separator/>
         <View>
          <Text>{'\n'}</Text>
         <Button
          title="Về chúng tôi"
           onPress={() =>Alert.alert('Về chúng tôi')}
         />
         </View>
         

      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


