import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        // alignItems: 'center',
    },
    header: {
        width: '100%',
        // margin: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#1c1c1c',
        paddingBottom: 10,
    },
    image: {
        width: '35%',
        height: 35,
        objectFit: 'fill',
        marginLeft: 5,
        marginTop: 10,
    },
    titulo_ident: {
        color: '#fff',
        marginTop: 30,
        marginLeft: 15
    },
    container_numero_cpf: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 15
    },
    numero_cpf: {
        color: '#a8a8a8',
        marginLeft: 20,
        fontSize: 12,
    },
    digite_seu_cpf: {
        color: '#a8a8a8',
        marginLeft: 15,
        marginTop: 20,
        fontSize: 12,
    },
    container_input: {
        marginLeft: 15,
        marginTop: 20,
    },
    cpf: {
        color: '#fff',
    },
    input: {
        backgroundColor: '#1F1D0E',
        color: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        padding: 7,
        borderColor: '#fff',
        width: '95%',
        fontSize: 12,
        paddingLeft: 25,
        marginTop: 10,
    },
    container_botao_continuar: {
        marginTop: 25,
        marginRight: 20,
    },
    botao_continuar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1351b4',
        padding: 10,
        borderRadius: 20,
    },
    continuar: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    container_outras_opcoes: {
        marginLeft: 15,
        width: '90%',
        marginTop: 20,
        paddingBottom: 7,
        borderBottomWidth: 1,
        borderColor: '#a8a8a8',
    },
    outras_opcoes: {
        color: '#fff',
    },
    container_login_banco: {
        marginLeft: 15,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    login_banco: {
        color: '#438853',
        marginLeft: 15,
    },
    login_banco_verde: {
        color: '#fff',
        backgroundColor: '#018C32',
        fontSize: 10
    },
    container_certificado: {
        marginLeft: 15,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',

    },
    certificado: {
        color: '#939393',
        marginLeft: 15,
    },
    footer: {
        marginTop: 50,
        marginLeft: 30,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container_duvida: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    duvida: {
        color: '#6b7ca5',
        marginLeft: 20,
    },
    container_uso: {
        marginTop: 5,
        marginLeft: 20,
    },
    termo_uso: {
        color: '#6b7ca5',
    },
    sucesso: {
        marginTop: 10,
        color: 'green'
    },
    erro: {
        marginTop: 10,
        color: 'red'
    }
});

export default styles;
