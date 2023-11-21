import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import image from '../../assets/govbr.png';
import { MaterialCommunityIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';


export default function Login() {

    const [cpf, setCpf] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const confirm = () => {
        if (cpf !== '123.456.789-10') {
            setError(true);
            setSuccess(false);
        } else {
            setSuccess(true);
            setError(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={image}
                    style={styles.image}
                />
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                    <MaterialCommunityIcons name={'circle-half-full'} size={15} color="#96b1fe" />
                    <FontAwesome name={'deaf'} size={15} color="#96b1fe" style={{ marginLeft: 20, marginRight: 10 }} />
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.titulo_ident}>Identifique-se no gov.br com:</Text>
                </View>
                <View style={styles.container_numero_cpf}>
                    <Entypo name={'v-card'} size={15} color="#96b1fe" />
                    <Text style={styles.numero_cpf}>Número do CPF</Text>
                </View>
                <View>
                    <Text style={styles.digite_seu_cpf}>Digite seu CPF para <Text style={{ color: '#fff' }}>criar</Text> ou <Text style={{ color: '#fff' }} >acessar</Text> sua conta gov.br</Text>
                </View>
            </View>

            <View style={styles.container_input}>
                <Text style={styles.cpf}>CPF</Text>
                <View>
                    <TextInput
                        placeholder="Digite seu CPF"
                        style={styles.input}
                        placeholderTextColor={'#67645B'}
                        onChangeText={(text) => setCpf(text)}
                    />
                    {success && (
                        <Text style={styles.sucesso}>CPF ACEITO!</Text>
                    )}
                    {error && (
                        <Text style={styles.erro}>CPF INVÁLIDO!</Text>
                    )}
                </View>
                <View style={styles.container_botao_continuar}>
                    <TouchableOpacity style={styles.botao_continuar} onPress={confirm}>
                        <Text style={styles.continuar}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container_outras_opcoes}>
                <Text style={styles.outras_opcoes}>Outras opções de identificação:</Text>
            </View>

            <View style={styles.container_login_banco}>
                <AntDesign name={'mobile1'} size={15} color="#DCFFE2" />
                <Text style={styles.login_banco}>Login com seu banco <Text style={styles.login_banco_verde}>SUA CONTA SERÁ PRATA</Text></Text>
            </View>

            <View style={styles.container_certificado}>
                <MaterialCommunityIcons name={'cloud-lock'} size={15} color="#96b1fe" />
                <Text style={styles.certificado}>Seu certificado digital em nuvem</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.container_duvida}>
                    <AntDesign name={'questioncircle'} size={15} color="#90B1FD" />
                    <Text style={styles.duvida}>Está com dúvidas e precisa de ajuda?</Text>
                </View>
                <View style={styles.container_uso}>
                    <Text style={styles.termo_uso}>Termo de Uso e Aviso de Privacidade</Text>
                </View>
            </View>
        </View>
    )
}