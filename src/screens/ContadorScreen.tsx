import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>
            <TouchableOpacity onPress={()=>setcontador(contador+1)}
                style={styles.fabLocationBR}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setcontador(contador-1)}
                style={styles.fabLocationBL}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})