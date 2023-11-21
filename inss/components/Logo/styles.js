import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: 70, 
    objectFit: 'fill'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
  }
});

export default styles;
