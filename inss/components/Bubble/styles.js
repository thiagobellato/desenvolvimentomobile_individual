import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },  
  botao: {
    backgroundColor: '#121212',
    width: 40,
    height: 40,
    borderRadius: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_texto: {
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },  
  texto: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
