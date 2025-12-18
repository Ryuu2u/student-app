import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f32121ff',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default styles;