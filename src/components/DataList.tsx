import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DataItem from './DataItem';

const DataList = (props) => {
    
    const List = props.assessments.map((item, key)=>{
        return (
            <DataItem key={key} item={item}/>
        )
    })

    const collapse = (e) => {
    }

    const result = Object.values(props.assessments.reduce((acc, x) => {
        acc[x.project.name] = [...(acc[x.project.name] || []), x ];
        return acc;
      }, {}));
      
     
    const groupedList = result.map(item => {
        let hideFlag = false
        const groupList = item.map( i  => {
            return (
                <DataItem key={Math.random()} item={i}/>
            )
        })

        return (
            <View>
                <TouchableOpacity onPress={e => collapse(e)}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.sectionTitle}>{item[0].project.name}</Text>
                        <Text style={styles.arrowUp}>^</Text>
                    </View>
                </TouchableOpacity>
                {groupList}
            </View>
        )
    })


    return (
        <>
            {groupedList}
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 24,
        paddingTop: 8,
        marginTop: 5,
        paddingBottom: 8,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    sectionTitle: {
      fontSize: 18,
      color: 'black',
      fontWeight: '600',
    },
    arrowUp: {
      fontSize: 18,
      fontWeight: '700',
    },
  });

export default DataList;