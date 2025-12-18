import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StudentCardStyles';

const StudentCard = ({ student, onToggle }) => {
  const isActive = student.status === 'active';
  
  return (
    <View style={[
      styles.card, 
      !isActive && styles.cardInactive
    ]}>
      <View style={styles.infoContainer}>
        <Text style={[
          styles.name,
          !isActive && styles.textInactive
        ]}>
          {student.name}
        </Text>
        <Text style={[
          styles.details,
          !isActive && styles.textInactive
        ]}>
          ชั้น: {student.grade} | GPA: {student.gpa.toFixed(2)}
        </Text>
      </View>
      
      <TouchableOpacity 
        style={[
          styles.statusButton,
          isActive ? styles.statusButtonActive : styles.statusButtonInactive
        ]}
        onPress={onToggle}
      >
        <Text style={styles.statusButtonText}>
          {isActive ? 'เรียนอยู่' : 'หยุดเรียน'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StudentCard;