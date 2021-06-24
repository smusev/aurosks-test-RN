import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DataItem = (props) => {
    
    const item = props.item

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.sectionTitle}>{item.copId} AC-{item.acId}</Text>
            </View>
            <View >
                <Text>{item.project.name}.{item.subProject.name}</Text>
            </View>
            <View
                style={styles.delimeter}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      paddingHorizontal: 24,
      marginTop: 12,
    },
    titleContainer:{
        flex: 1,
        flexWrap: 'nowrap'
    },
    sectionTitle: {
      fontSize: 18,
      color: 'orange',
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    delimeter: {
        marginTop: 8,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    }
  });

export default DataItem;