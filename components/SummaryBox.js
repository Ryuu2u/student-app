import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/SummaryBoxStyles';

const SummaryBox = ({ activeStudents, totalStudents, averageGPA }) => {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>สรุปข้อมูล</Text>
      
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{activeStudents}</Text>
          <Text style={styles.statLabel}>กำลังเรียน</Text>
        </View>
        
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{totalStudents}</Text>
          <Text style={styles.statLabel}>ทั้งหมด</Text>
        </View>
        
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{averageGPA}</Text>
          <Text style={styles.statLabel}>GPA เฉลี่ย</Text>
        </View>
      </View>
    </View>
  );
};

export default SummaryBox;