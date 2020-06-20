import React from 'react';
import { Text, TextInput, View} from 'react-native';
import {Container,Header, Content, Form, Item,Label, Input, Button, Icon} from "native-base";
import { StyleProvider } from 'native-base';

export default function HelloWorldApp(props) {
    console.log(props,"ppppp")
    return (
        <Container style={{
            width:'100%',
            flex: 1,
            justifyContent: 'space-between'
        }}>
            <Header />
            <Content>

                <View>
                    <Button bordered style={{
                        justifyContent: 'center',
                        borderColor: 'purple',
                        borderRadius: 7
                    }}
                    >
                        <Text style={{fontSize:20, color:'purple', }}> Log In </Text>
                    </Button>
                    <Button transparent style={{justifyContent: 'center'}}
                    >
                        <Text style={{ fontSize:16, color:'purple',  justifyContent: 'flex-end',
                    }}>
                            Haven't an accountwwff? Register e
                        </Text>
                    </Button>
                </View>

            </Content>
        </Container>
    );
}

