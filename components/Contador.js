import React from 'react'
import {View, Text} from 'react-native'

class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activo: false,
            tiempo: this.props.tiempo
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.tiempo !== this.props.tiempo){
            console.log("cambio el tiempo", prevProps.tiempo, this.props.tiempo)
        }
    }

    render(){
        return(
            <View>
                <Text>{this.props.tiempo}:00</Text>
            </View>
        )
    }
}
export default Contador;