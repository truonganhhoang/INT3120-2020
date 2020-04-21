import React from 'react';
import FileViewer from 'react-native-file-viewer';
 
const TipRemember = () => {
    const path = '../data/TipRemembers.doc'
    FileViewer.open(path)
    .then(() => {
        // return...
    })
    .catch(error => {
        // error
    });
}
