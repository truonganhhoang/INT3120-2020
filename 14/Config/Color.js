export default pickColor = (darkmode) => {
  if (darkmode){
    return {
      headerColor: '#36322f',
      buttonColor: '#c4671b',
      textColor : '#ffffff',
      containerColor : '#181818',
      modalColor : '#424c52',
      cardColor : '#242424',
      checkboxColor : '#303030',
      iconColor: '#ffffff',
      englistWord: '#ffffff',
      translateField: '#323232',
    }
  } else {
    return {
      headerColor: '#2089db',
      buttonColor : '#2089db',
      textColor : '#000000',
      containerColor : '#d2d6d9',
      modalColor : '#ffffff',
      cardColor : '#ffffff',
      checkboxColor : '#ffffff',
      iconColor: '#000000',
      englistWord: '#2089db',
      translateField: '#f0f0f0',
    }
  }
}