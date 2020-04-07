const defaultDataExam = [
  {
    id: 1,
    word: "abdomen",
    options: [
      {
        word: "ankle",
        image: "https://www.pedifix.com/images/Foottopsprain.JPG",
        correct: false
      },
      {
        word: "abdomen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg",
        correct: true
      }
    ]
  },
  {
    id: 2,
    word: "ankle",
    options: [
      {
        word: "ankle",
        image: "https://www.pedifix.com/images/Foottopsprain.JPG",
        correct: false
      },
      {
        word: "abdomen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg",
        correct: false
      },
      {
        word: "ankle",
        image: "https://www.pedifix.com/images/Foottopsprain.JPG",
        correct: true
      },
      {
        word: "abdomen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg",
        correct: false
      }
    ]
  },
  {
    id: 3,
    word: "arm",
    options: [
      {
        word: "abdomen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg",
        correct: false
      },
      {
        word: "arm",
        image:
          "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
        correct: true
      }
    ]
  },
  {
    id: 4,
    word: "chest",
    options: [
      {
        word: "chest",
        image:
          "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg",
        correct: false
      },
      {
        word: "arm",
        image:
          "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
        correct: false
      },
      {
        word: "chest",
        image:
          "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg",
        correct: true
      },
      {
        word: "arm",
        image:
          "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
        correct: false
      },
      {
        word: "chest",
        image:
          "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg",
        correct: false
      },
      {
        word: "arm",
        image:
          "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
        correct: false
      },
      {
        word: "chest",
        image:
          "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg",
        correct: false
      },
      {
        word: "arm",
        image:
          "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
        correct: false
      },
      {
        word: "arm",
        image:
          "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
        correct: false
      }
    ]
  }
];

const dataExam = (state = defaultDataExam, action) => {
  if (action.type === "START_EXAM") {
    state = defaultDataExam;
    return state;
  }

  if (action.type === "PICK_ONE_CHOICE") {
    return state.map(e => {
      if (e.id !== action.id) return e;
      else {
        let newOpt = e.options.map((el, index) => {
          if (index === action.indexChoice) {
            return { ...el, isPressed: true };
          }
          return el;
        });
        let newE = { ...e, options: newOpt };
        // console.log(newE);
        return newE;
      }
    });
    return state;
  }

  if (action.type === "ANSWER_IS_TRUE") {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return { ...e, answerCorrect: true };
    });
  }
  return state;
};

export default dataExam;
