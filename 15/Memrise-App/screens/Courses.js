import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import * as Progress from "react-native-progress";

import Unit from "../components/Unit";
import axios from "axios";
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

  function onPressNavigate(id) {
    const navigateCourse = courses.filter(
      (course) => course.id === id
    );
      
    return navigation.navigate("ListWord", {
      id: id,
      navigateCourse: navigateCourse,
    });
  }

  return (
    <View style={styles.container}>
      {(isLoading && <Spinner />) || (
        <View style={styles.container}>
          {/* <Progress.Bar progress={0.3} width={screenWidth} /> */}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1,
  },
});
