import React,{useEffect, useState} from 'react'
import {View,Text,TextInput,Button,Vibration, StyleSheet} from 'react-native'

let contadorId = null

export default function CronometroPomodoro() {
    const [estado, setEstado] = useState("Trabajo")
    const [tiempoTrabajo, setTiempoTrabajo] = useState(25)
    const [tiempoDescanso, setTiempoDescanso] = useState(5)
    const [activo, setActivo] = useState(false)
    const [tiempo, setTiempo] = useState(getTiempoActivo)
    const [pausa, setPausa] = useState(true)

     
    useEffect(() => {
         handleTiempo()
    },[estado])

    useEffect(() => {
        handleTiempo()
    },[tiempoDescanso,tiempoTrabajo])
    

    useEffect(() => {
        if(!pausa && tiempo == 0){
            clearInterval(contadorId)
            Vibration.vibrate()
            handleEstado()
            setActivo(!activo)
            console.log("Vibrate")
        }
    },[tiempo])

    useEffect(() => {
            contadorId = setInterval(() => {
                setTiempo(tiempo => tiempo - 1)
            }, 1000);
    },[activo])

  
    useEffect(() => {
        if(pausa){
            clearInterval(contadorId)
        }
    },[])


    let handleTiempoTrabajo = (value) => {
        setTiempoTrabajo(Math.floor(value))
        console.log(tiempoTrabajo)
    }

    let handleTiempoDescanso = (value) => {
        setTiempoDescanso(Math.floor(value))
        console.log(tiempoDescanso)
    }


    let handleEstado = () => {
        console.log("cambio el estado")
        if(estado === "Trabajo"){
            setEstado("Descanso")
        }
        else
        {
            setEstado("Trabajo")
        }
        console.log(estado)
    }

    let handleTiempo = () => {
        setTiempo(getTiempoActivo())
    }

    
    let getTiempoActivo = () => {
        if(estado === "Trabajo")
        {
            return tiempoTrabajo*60
        }
        else
        {
            return tiempoDescanso*60
        }
    }
    
    
    let iniciarContador = () => {
        setPausa(false)
        setActivo(!activo)
    }

    let pausar = () => {
        clearInterval(contadorId)
        setPausa(true)
    }

    let reset = () => {
        clearInterval(contadorId)
        setPausa(true)
        handleTiempo()
    }

    
    
    return(
        <View>
            <View >
                <Text>Tiempo de trabajo: {tiempoTrabajo}</Text>
                <TextInput  keyboardType={"numeric"} onChangeText={value => handleTiempoTrabajo(value)}/>
                <Text>Tiempo de descanso: {tiempoDescanso}</Text>
                <TextInput  keyboardType={"numeric"} onChangeText={value => handleTiempoDescanso(value)}/>
            </View>
            <View>
                <Text > 
                {Math.floor(tiempo/60).toString().padStart(2,"0") + ":" + 
                (tiempo % 60).toString().padStart(2,"0")}
                </Text>
            </View>
            <View>
                <Button title={"Cambiar Estado"} onPress={handleEstado} color='black'/>
                <Button title={"Play"} onPress={iniciarContador} color='black'/>
                <Button title={"Pause"} onPress={pausar} color='black' />
                <Button title={"Reset"} onPress={reset}  color='black'/>
            </View>
        </View>
          
            
    )
}



const styles = StyleSheet.create({


})