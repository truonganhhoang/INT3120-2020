import 'react-native'; 
import React from 'react'; 
import Word from '../WordCard'; 
import renderer from 'react-test-renderer'; 

const data1 = {
  "en_meaning" : "comb",
  "image_uri" : "https://firebasestorage.googleapis.com/v0/b/eng...",
  "spelling" : "/kəʊm/",
  "vn_meaning" : "Lược",
  "void_uri" : "https://firebasestorage.googleapis.com/v0/b/english-uet-team.appspot.com/o/void%2FAppearance%2Fhair%2Fcomb.mp3?alt=media&token=217c9613-3678-466c-900d-62b4d9d89d4f"
}

const icon1 = 'staro'

it('rerender WordCard Component correctly', () => {
  renderer.create(
    <Word 
      data={data1}
      icon={icon1}
      key='1'
    />
  )
})

