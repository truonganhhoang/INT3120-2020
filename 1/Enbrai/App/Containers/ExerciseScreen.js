import React, { Component } from 'react'
import Exercise from '../Components/Exercise'
export default class ExerciseScreen extends Component {
    render() {
        return (
            <Exercise {...this.props}/>
        )
    }
}
