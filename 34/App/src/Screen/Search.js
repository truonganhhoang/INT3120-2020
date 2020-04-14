import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle = {{ backgroundColor: 'green', marginTop: -2 }}
        inputContainerStyle={{backgroundColor: 'white', height: 40}}
        inputStyle = {{backgroundColor: 'white', fontSize: 18, padding: 3}}
        searchIcon = {{color: 'green', size: 30}}
        round= {true}
        
      />
    );
  }
}