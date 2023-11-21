import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    paddingTop: 25
  },
  container_botao_entrar: {
    width: '70%',
  },
  botao_entrar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1351b4',
    padding: 15,
    borderRadius: 20,
    marginTop: 40
  },
  text_botao: {
    color: '#fff'
  },
  container_texto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginTop: 25
  },
  texto_1: {
    color: '#a8a8a8',
    textAlign: 'center',
    fontSize: 11
  },
  texto_2: {
    color: '#a8a8a8',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 15
  },
  container_titulo_sem_senha: {
    marginTop: 50,
    width: '100%',
    marginLeft: 40
  },
  texto_titulo_sem_senha: {
    color: '#767676'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 30
  },
});

export default styles;
