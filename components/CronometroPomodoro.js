import React,{useEffect} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import Contador from './Contador'

class CronometroPomodoro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            estado: "Trabajo",
            tiempoTrabajo: 25,
            tiempoDescanso: 5,
        }
    }

    setTiempoTrabajo = event => {
        this.setState({ tiempoTrabajo: event.target.value })
    }
    
   setTiempoDescanso = event => {
        this.setState({ tiempoDescanso: event.target.value })
    }   
    

    setEstado = () =>{
        if(this.state.estado === "Trabajo")
        {
            this.setState({
                estado: "Descanso"
            })
        }else
        {
            this.setState({
                estado: "Trabajo"
            })
        }
    }

    tiempoActivo = () => {   
		if(this.state.estado === "Trabajo")
		{
            return this.state.tiempoTrabajo
		}
		else
		{
			return this.state.tiempoDescanso
        }
    }
    

    

    render(){
        let tiempo = this.tiempoActivo()
        return(
            <View>
                <View>
                    <Text>Tiempo de trabajo: {this.state.tiempoTrabajo}</Text>
                    <TextInput  keyboardType={"numeric"} onChange={this.setTiempoTrabajo}/>
				</View>
                <View>
                    <Text>Tiempo de descanso: {this.state.tiempoDescanso}</Text>
                    <TextInput  keyboardType={"numeric"} onChange={this.setTiempoDescanso}/>
				</View>
                <View>
                    <Button title={"Cambiar estado"} onPress={this.setEstado}/>
                </View>
                <Contador 
                    tiempo={tiempo}
                    estado={this.state.estado}
                    Oncomplete={this.setEstado}
                />
            </View>
          
            
        )
    }

}
export default CronometroPomodoro;