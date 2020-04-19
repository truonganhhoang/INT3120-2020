import React, { Component } from "react";
import db from "../../config/configFirebase";

export async function createExamData(topicName, categoryName) {
  // Fetch data from firebase
  let remoteData = [];
  await fetchData(topicName, categoryName).then((values) => {
    remoteData = values;
  });
  const numberQuestion = remoteData.length;

  const questionTwoChoice = Math.floor((numberQuestion * 50) / 100); //question have 2 choice
  const questionFourChoice = Math.floor((numberQuestion * 35) / 100); //question have 4 choice
  const questionNineChoice = 1 - questionFourChoice - questionTwoChoice; //question have 9 choice

  // Genarate exam
  const examData = [];
  let usedWords = []; // This array stores indexes of the words which was using in exam.

  for (let id = 1; id <= numberQuestion; id++) {
    let initQuestion = { id: id, word: "", options: [] };
    let usedAnswers = []; // This array stores indexes of the words which was using in question.

    //Random a word
    let indexWord;
    do {
      indexWord = randomInt(numberQuestion);
    } while (usedWords.find((e) => e === indexWord) + 1); //add 1 to avoid while(0)
    console.log(`${indexWord}`);
    usedWords.push(indexWord); //add to array to mark this word was used
    initQuestion = { ...initQuestion, word: remoteData[indexWord].word };

    let myOption = [];
    let choice1 = { ...remoteData[indexWord], correct: true };
    myOption.push(choice1);
    usedAnswers.push(indexWord);

    if (id >= 1 && id <= questionTwoChoice) {
      let ch2;
      do {
        ch2 = randomInt(numberQuestion);
      } while (indexWord === ch2);
      let choice2 = remoteData[ch2];
      myOption.push(choice2);
    } else if (
      id > questionTwoChoice &&
      id <= questionTwoChoice + questionFourChoice
    ) {
      for (let ch = 2; ch <= 4; ch++) {
        //choice 2 to 4
        let x;
        do {
          x = randomInt(numberQuestion);
        } while (usedAnswers.find((e) => e === x) + 1);
        usedAnswers.push(x);
        myOption.push(remoteData[x]);
      }
    } else {
      for (let ch = 2; ch <= 9; ch++) {
        //choice 2 to 9
        let x;
        do {
          x = randomInt(numberQuestion);
        } while (usedAnswers.find((e) => e === x) + 1);
        usedAnswers.push(x);
        myOption.push(remoteData[x]);
      }
    }

    shuffle(myOption); //shuffle choices
    initQuestion = { ...initQuestion, options: myOption };
    examData.push(initQuestion);
  }

  return examData;
}

function randomInt(max) {
  //Return a integer in range [min, max)
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle(arrayOrigin) {
  var ctr = arrayOrigin.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arrayOrigin[ctr];
    arrayOrigin[ctr] = arrayOrigin[index];
    arrayOrigin[index] = temp;
  }
  return arrayOrigin;
}

async function fetchData(topicName, categoryName) {
  let data = [];

  if (topicName !== undefined) {
    await db
      .collection("/topic/")
      .doc(categoryName)
      .collection(categoryName)
      .doc(topicName)
      .collection(topicName)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.data());
          data.push(doc.data());
        });
        // return data;
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }
  return data;
}
