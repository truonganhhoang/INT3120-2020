import React from 'react';
import { View } from 'react-native';
import { Character } from '../CharacterInput';
import styles from './styles';
import { Grid, Row, Col } from 'react-native-easy-grid';

const ListCharacter = (props: { data?: any; listCharShow?: any; setListCharShow?: any; disabled?: any }) => {
  const { data, listCharShow, setListCharShow, disabled } = props;

  function addCharacter(char: '') {
    let index = -1;
    const newListCharShow = [];

    for (let i = 0; i < listCharShow.length; i++) {
      newListCharShow[i] = listCharShow[i];
    }

    for (let i = 0; i < listCharShow.length; i++) {
      if (listCharShow[i] == "") {
        index = i;
        i = listCharShow.length;
      }
    }
    if (index != -1) {
      newListCharShow[index] = char
    }
    setListCharShow(newListCharShow);
  }

  return (
    <Grid>
      <Row style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
        {data.map((e: any) =>
          <Character char={e} onPress={() => addCharacter(e)} disabled={disabled} />
        )}
      </Row>
    </Grid>
  )
}

export default ListCharacter; 