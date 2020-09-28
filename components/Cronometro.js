import React from 'react'
import {View,Text,TextInput} from 'react-native'
import Contador from './Contador'

class Cronometro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tiempoTrabajo: 25,
            tiempoDescanso: 5
        }
    }

    setTiempoTrabajo = (text) => {
        this.setState({
            tiempoTrabajo: text
        })
    }

    setTiempoDescanso = (text) => {
        this.setState({
            tiempoDescanso: text
        })
    }

    render(){
        return(
            <View>
                <View>
                    <Text>Tiempo de trabajo: {this.state.tiempoTrabajo}</Text>
                    <TextInput  keyboardType={"numeric"} onChangeText={this.setTiempoTrabajo}/>
				</View>
                <View>
                    <Text>Tiempo de descanso: {this.state.tiempoDescanso}</Text>
                    <TextInput  keyboardType={"numeric"} onChangeText={this.setTiempoDescanso}/>
				</View>
                <Contador 
                    tiempo={(this.state.tiempoTrabajo)}
                />
            </View>
          
            
        )
    }

}
export default Cronometro;