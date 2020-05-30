import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import * as Progress from "react-native-progress";

import Unit from "../components/Unit";
import axios from "axios";
import spin from "../assets/spin.gif";
import Spinner from "../components/Spinner";

const screenWidth = Math.round(Dimensions.get("window").width);

export default function Courses({ navigation }) {
  const [courses, setCourses] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const queryString = `http://localhost:3000/courses`;
    axios
      .get(queryString)
      .then((res) => {
        const newCourses = res.data;
        setCourses(newCourses);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error in courseScreen is ", err));
  }, []);

  function onPressNavigate(courseId) {
    const navigateCourse = courses.filter(
      (course) => course.courseId === courseId
    );

    return navigation.navigate("ListWord", {
      courseId: courseId,
      navigateCourse: navigateCourse,
    });
  }

  return (
    <View style={styles.container}>
      
      {
       isLoading 
       && (<Spinner />)
       || 
       ( 
         <View style={styles.container}>
            <Progress.Bar progress={0.3} width={screenWidth} />
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <Unit unit={item} onPress={onPressNavigate} />
          )}
          keyExtractor={(item) => `${item.id}`}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        />
          </View>
        )
      }

      

    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1,
  },
});
