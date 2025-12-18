import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import StudentCard from './components/StudentCard';
import SummaryBox from './components/SummaryBox';
import styles from './styles/AppStyles';

export default function App() {
  // ข้อมูลนักเรียน
  const [students, setStudents] = useState([
    { id: 1, name: 'สมชาย ใจร้าย', grade: 'ม.3', gpa: 3.75, status: 'active' },
    { id: 2, name: 'สมหญิง ไม่รักเรียน', grade: 'ม.3', gpa: 3.95, status: 'active' },
    { id: 3, name: 'วิชัย ไม่ขยัน', grade: 'ม.3', gpa: 3.50, status: 'inactive' },
    { id: 4, name: 'ประภา ไม่เก่ง', grade: 'ม.3', gpa: 4.00, status: 'active' },
  ]);

  // ฟังก์ชันสลับสถานะนักเรียน
  const toggleStatus = (id) => {
    setStudents(students.map(student => 
      student.id === id 
        ? { ...student, status: student.status === 'active' ? 'inactive' : 'active' }
        : student
    ));
  };

  // คำนวณสถิติ
  const activeStudents = students.filter(s => s.status === 'active').length;
  const totalStudents = students.length;
  const averageGPA = (
    students
      .filter(s => s.status === 'active')
      .reduce((sum, s) => sum + s.gpa, 0) / activeStudents
  ).toFixed(2);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Header title="ระบบจัดการนักเรียน" />
      
      <SummaryBox 
        activeStudents={activeStudents}
        totalStudents={totalStudents}
        averageGPA={averageGPA}
      />
      
      <ScrollView style={styles.scrollView}>
        {students.map(student => (
          <StudentCard 
            key={student.id}
            student={student}
            onToggle={() => toggleStatus(student.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}