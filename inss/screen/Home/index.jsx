import React from "react"
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native"
import Logo from "../../components/Logo"
import styles from "./styles";
import Bubble from "../../components/Bubble";
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {

    const bubbleData = [
        { id: '1', logo: 'briefcase-medical', tipo: 'FontAwesome5', texto: 'Pedir Benefício por Incapacidade' },
        { id: '2', logo: 'barcode', tipo: 'AntDesign', texto: 'Emitir Guia de Pagament...' },
        { id: '3', logo: 'pencil-square-o', tipo: 'FontAwesome', texto: 'Comunicação de Acidente de Trabalho...' },
        { id: '4', logo: 'money-check-alt', tipo: 'FontAwesome5', texto: 'Calendário de Pagamento' },
        { id: '5', logo: 'building', tipo: 'FontAwesome', texto: 'Encontre uma Agência' },
        { id: '6', logo: 'question', tipo: 'AntDesign', texto: 'Inscrever no INSS' },
        { id: '7', logo: 'book-reader', tipo: 'FontAwesome5', texto: 'Educação Previdenciária - Escola...' },
        { id: '8', logo: 'ios-chatbubble-ellipses', tipo: 'Ionicons', texto: 'Falar.BR Ouvidoria' },
        { id: '9', logo: 'question', tipo: 'AntDesign', texto: 'Conheça as Vantagens' },
        { id: '10', logo: 'percent-outline', tipo: 'MaterialCommunityIcons', texto: 'Taxas de Empréstimo Consignado' },
    ];

    const renderBubble = (item) => (
        <Bubble logo={item.logo} tipo={item.tipo} texto={item.texto} />
    );

    const splitIntoRows = (data, columns) => {
        const result = [];
        for (let i = 0; i < data.length; i += columns) {
            result.push(data.slice(i, i + columns));
        }
        return result;
    };

    const rows = splitIntoRows(bubbleData, 3);


    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Logo />
                </View>
                <View style={styles.container_botao_entrar}>
                    <TouchableOpacity
                        style={styles.botao_entrar}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.text_botao}>Entrar com <Text style={{ fontWeight: 'bold' }}>gov.br</Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_texto}>
                    <Text style={styles.texto_1}>
                        Clique no botão acima para entrar no Meu INSS ou cadastrar sua senha de acesso.
                    </Text>
                    <Text style={styles.texto_2}>
                        Não forneça sua senha para outra pessoa. Ela é individual e intransferível.
                    </Text>
                </View>
                <View style={styles.container_titulo_sem_senha}>
                    <Text style={styles.texto_titulo_sem_senha}>Serviços sem senha</Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((bubble) => (
                                <View key={bubble.id} style={styles.bubbleContainer}>
                                    {renderBubble(bubble)}
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

            </View>
        </ScrollView>
    )
}