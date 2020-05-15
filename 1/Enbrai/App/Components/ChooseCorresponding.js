import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ProgressBarAndroid } from 'react-native'
import { withNavigation } from 'react-navigation';

const ChooseCorresponding = (props) => {

  const heightW = Dimensions.get('window').height
  const widthW = Dimensions.get('window').width
  const [backgroundColor, setBackgroundColor] = useState([])
  const [textColor, setTextColor] = useState([])
  const [borderColor, setBoderColor] = useState([])
  const list = props.navigation.getParam('list')
  const listCorresponding = props.navigation.getParam('listCorresponding')
  var a = 0
  var listSelected = []
  const initProperties = () => {
    var newBackgroundColor = []
    var newTextColor = []
    var newBorderColor = []
    list.map(i => {
      newBackgroundColor.push('white')
      newTextColor.push('#6E6E6E')
      newBorderColor.push('white')
    })
    setBackgroundColor(newBackgroundColor)
    setTextColor(newTextColor)
    setBoderColor(newBorderColor)
  }

  const changeColorItemSelected = (newBGColor, newTColor, newBColor, index) => {
    var newBackgroundColor = backgroundColor
    var newTextColor = textColor
    var newBorderColor = borderColor

    newBackgroundColor[index] = newBGColor
    newTextColor[index] = newTColor
    newBorderColor[index] = newBColor

    setBackgroundColor(newBackgroundColor)
    setTextColor(newTextColor)
    setBoderColor(newBorderColor)
  }

  useEffect(() => {
    initProperties()
    return () => {}
  }, [props, backgroundColor, textColor, borderColor])

  const handleItemSelected = (data, index) => {
    listSelected.push(index)
    changeColorItemSelected('#faa032', '#6E6E6E', 'white', index)
    var findDataIndex = listCorresponding.indexOf(data)
    if (listSelected.length > 1) {
      if (listSelected[listSelected.length - 1] == listSelected[listSelected.length - 2]) {
        changeColorItemSelected('white', '#6E6E6E', 'white', index)
      }
      else if (findDataIndex == 0) {
        if (listCorresponding[findDataIndex] == listCorresponding[findDataIndex + 1]) {
          setTimeout(changeColorItemSelected('green', '#6E6E6E', 'green', index), 500)
          changeColorItemSelected('green', '#6E6E6E', 'white', index)
        }
      }
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#6E6E6E', fontSize: 18 }}>Chọn các từ và bản dịch theo cặp</Text>
      </View>
      <View style={{
        flex: 7, 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        width: widthW > 350 ? 350 : widthW }}>
        {list.map((i, index) => {
          return  <TouchableOpacity flex={1} onPress={() => {handleItemSelected(i, index)}}>
            <Text style={{ 
              paddingLeft: 15,
              borderColor: borderColor[index],
              textColor: textColor[index],
              borderWidth: 1, 
              paddingRight: 15,
              backgroundColor: backgroundColor[index], 
              fontSize: 15,
              borderRadius: 5, 
              height: 50, 
              margin: 10, 
              display:'flex',
              textAlign: 'center',
              textAlignVertical: 'center'
              }}>{i}</Text>
          </TouchableOpacity>
        })}
      </View>

      <View flex={2} display='flex' justifyContent='center' alignSelf='center' alignItems='center' style={{ width:250, borderRadius: 5}}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0/17}
          color='#000000'
          style={{ transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }], width: widthW*0.8, borderRadius: 5, flex: 2 }}
        />
        <Text style={{flex: 2}}>{`${a} / 17`}</Text>
      </View>
    </View>
  )
}

export default withNavigation(ChooseCorresponding);