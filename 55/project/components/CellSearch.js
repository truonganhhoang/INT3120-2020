import * as React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class CellSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.cell}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={this.props.element.img}
                        resizeMode="stretch"
                    />
                </TouchableOpacity>
            </View>

        )
    }
}

const { width } = Dimensions.get('window');
const ImageSize = width / 3;

const styles = StyleSheet.create({
    cell: {
        backgroundColor: "#8FBC8F",
        borderRadius: 10,
    },

    image: {
        height: ImageSize,
        width: ImageSize,
    }
})