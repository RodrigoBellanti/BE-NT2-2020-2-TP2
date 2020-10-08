import React,{useEffect} from 'react'
import {View,Text,TextInput,Button,Vibration, StyleSheet} from 'react-native'

class CronometroPomodoro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            estado: "Trabajo",
            tiempoTrabajo: 25,
            tiempoDescanso: 5,
            activo: false,
            pausado: false,
            tiempo: null
        }
    }

    
    componentDidMount(){
        this.setTiempoActivo()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.tiempoTrabajo !== this.state.tiempoTrabajo){
            this.setTiempoActivo();
        }
        if(prevState.tiempoDescanso !== this.state.tiempoDescanso){
            this.setTiempoActivo();
        }
        if(prevState.estado !== this.state.estado){
            this.setTiempoActivo();
        }
        if(this.state.activo == true && this.state.tiempo == 0){
            clearInterval(this.contadorId)
            Vibration.vibrate()
            this.setEstado()
            this.setTiempoActivo()
            this.contar()
        }
    }

    setTiempoTrabajo = event => {
        if(event.target.value>0){
            this.setState({ tiempoTrabajo: event.target.value })
           }
           else {
               alert('Numero invalido')
           }
    }
    
   setTiempoDescanso = event => {
       if(event.target.value>0){
        this.setState({ tiempoDescanso: event.target.value })
       }
       else {
           alert('Numero invalido')
       }
        
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

    setTiempoActivo = () => {   
		if(this.state.estado === "Trabajo")
		{
            this.setState({
                tiempo: this.state.tiempoTrabajo*60
            })
		}
		else
		{
			this.setState({
                tiempo: this.state.tiempoDescanso*60
            })
        }
    }

    getTiempoActivo = () => {
        if(this.state.estado === "Trabajo")
        {
            return this.state.tiempoTrabajo*60
        }
        else
        {
            return this.state.tiempoDescanso*60
        }
    }
    
    contar = () => {
        this.setState({
            activo: true
        })
        this.contadorId = setInterval(() => {
            this.setState({
                tiempo: this.state.tiempo - 1
            })
            console.log(this.state.tiempo)
        }, 1000);
    }

    pausar = () => {
        clearInterval(this.contadorId)
        this.setState({
            activo: false,
            pausado: true
        })
    }

    reset = () => {
        clearInterval(this.contadorId)
        this.setState({
            activo: false,
            pausado: false,
            tiempo: this.getTiempoActivo()
        })
    }

    
    

    render(){
        return(
            <View>
                <View >
                    <Text>Tiempo de trabajo: {this.state.tiempoTrabajo}</Text>
                    <TextInput  keyboardType={"numeric"} onChange={this.setTiempoTrabajo}/>
                    <Text>Tiempo de descanso: {this.state.tiempoDescanso}</Text>
                    <TextInput  keyboardType={"numeric"} onChange={this.setTiempoDescanso}/>
                </View>
                <View>
                    <Text > 
                    {Math.floor(this.state.tiempo/60).toString().padStart(2,"0") + ":" + 
                    (this.state.tiempo % 60).toString().padStart(2,"0")}
                    </Text>
                </View>
                <View>
                    <Button title={"Play"} onPress={this.contar} color='black'/>
                    <Button title={"Pause"} onPress={this.pausar} color='black' />
                    <Button title={"Reset"} onPress={this.reset}  color='black'/>
                </View>
            </View>
          
            
        )
    }

}
export default CronometroPomodoro;

const styles = StyleSheet.create({


})