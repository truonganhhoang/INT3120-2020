import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const CustomListview = () => {
    return (
      <View style={styles.container}>
         <SectionList
            sections={[
               {title: 'Overview', data: ['Overview']},
               {title: 'Basic Concepts', data: ['Basic Concepts']},
               {title: 'Conditionals and Loops', data: ['Conditionals and Loops', 'Function']},
            // {title: 'Functions', data: ['']},
               {title: 'Objects', data: ['Objects', 'Core Objects']},
            // {title: 'Core Objects', data: ['']},
               {title: 'DOM & Events', data: ['DOM & Events']},
               {title: 'ECMAScript 6', data: ['ECMAScript 6']},
               {title: 'Certificate', data: ['Certificate']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
         />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default CustomListview;