import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DataList from './DataList'
import { useSelector } from 'react-redux';


const Creator = () => {
 const assessments = useSelector((state) => state.assessments.creatorData)

  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
     >
       <View
          style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>My "Evaluation Ready" Assessments as Creator</Text>
            <DataList assessments={assessments}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 0,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'grey',
    fontWeight: '600',
  },
});

export default Creator;