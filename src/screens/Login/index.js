import {Button, Content, Form, Icon, Input, Item} from "native-base";
import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {disableLoader, requestLogin} from '../../actions/authActions'
import { useDispatch, useSelector } from "react-redux";
import * as firebase from "firebase";
import { Spinner }  from 'native-base'
import * as authReducer from "../../reducers/authReducer";

export default function AuthEmailPasswordScreen() {

    const [email,setEmail] = useState('nizar.jalal98@gmail.com')
    const [password,setPass] = useState('12345678')

    const dispatch = useDispatch();

    // const email = useSelector(state=>state.email)
    // const password = useSelector(state=>state.password)
    const loading = useSelector(state=>state.loadingReducer.isLoginLoading)
    const error = useSelector(state=>state.authReducer.error)

    console.log("errMsg",useSelector(state=>state.authReducer.error))

    const onLogin = () => {
        dispatch(requestLogin(email,password))
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(()=>onAuthSuccess())
        //     .catch( ()=> {
        //         firebase.auth().createUserWithEmailAndPassword(email, password)
        //             .then(()=>onAuthSuccess())
        //             .catch(err=>{
        //                 dispatch(disableLoader())
        //                 console.log(err,"error firebase")
        //                 setErrorMessage(err.message)
        //             })
        //         }
        //     );
    }

    const renderLoader = () => {
       return  loading ?
            (
                <Spinner color={"purple"}/>
            )
            :
            (
                (
                    <Button bordered style={{
                        justifyContent: 'center',
                        borderColor: 'purple',
                        borderRadius: 7,
                    }}
                            onPress={onLogin}
                    >
                        <Text style={{fontSize:20, color:'purple', }}> Log In </Text>
                    </Button>
                )
            )
    }

    return(
        <View style={{ flex: 1, justifyContent:'center'}}>
            <Text style={{color: 'purple', fontSize: 20, alignSelf: 'center'}}> Login by Email & Password</Text>
            <Form >
                <Item floatingLabel>
                    <Icon active name='lock' style={{color: 'lightgrey'}}/>
                    <Input placeholder='Email Address' value={email} onChangeText={t=>setEmail(t)}/>
                </Item>
                <Item floatingLabel last>
                    <Icon active name='lock' style={{color: 'lightgrey'}}/>
                    <Input placeholder='password' value={password} onChangeText={(t)=>setPass(t)}/>
                    <Icon active name='eye' style={{color: 'lightgrey'}}/>
                </Item>

            </Form>
            {renderLoader()}
            <Text style={{color:'red'}}>{error.message}</Text>
        </View>
    )
}

