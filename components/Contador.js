import React from 'react'
import {View, Text, Button,Vibration} from 'react-native'


class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activo: false,
            pausado: false,
            tiempo: this.props.tiempo
        }
    }

    
    static getDerivedStateFromProps(props, state ){
        if(state.tiempo !== props.tiempo && state.activo == false && state.pausado == false){
            return(
                state.tiempo = props.tiempo
            )
        }else if(state.tiempo == 0 && state.activo == true){
            return(
                state.tiempo = props.tiempo
            )
        }
        return null
    }
    

    


    componentDidUpdate(prevProps, prevState){
        if(this.state.activo === true && this.state.tiempo == 0)
		{
			clearInterval(this.contadorId)
			Vibration.vibrate([500, 500, 500])
            console.log("finish from componentdidupdate");

		}
		else if(this.state.activo === false)
		{
			clearInterval(this.contadorId)
		}
    }

  

    contar = () => {
        this.setState({
            activo: true
        })
        this.contadorId = setInterval(() => {
            console.log(this.state.tiempo)
            this.setState({
                tiempo: this.state.tiempo - 1
            })
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
            tiempo: this.props.tiempo
        })
    }

    render(){
        return(
            <View>
                <Text> 
                    {this.state.tiempo}
                </Text>
                <Button title={"Play"} onPress={this.contar}/>
                <Button title={"Pause"} onPress={this.pausar}/>
                <Button title={"Reset"} onPress={this.reset}/>
            </View>
        )
    }
}
export default Contador;