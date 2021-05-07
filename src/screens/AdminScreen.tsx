import * as React from 'react'
import styled from 'styled-components/native'
import {View, Text, TouchableOpacity} from 'react-native'
import {Button, Header, Input} from 'react-native-elements'
import { Heading, Page } from '../../components'

const ButtonContainer = styled.Text`
    display: flex;
    flex-direction: col;
    flex-wrap: wrap;
    justify-content: space-between;
`
const SummonButton = styled.TouchableOpacity<{color?: string}>`
    background-color: ${p => p.color || 'red'};
    flex: 48% 0 0;
    border-radius: 50px;
    text-align: center;
    margin-bottom: 50px;
    display: flex;
    height: 70px;    
    align-items: center;
    justify-content: center;
    color: white;
`

const SummonButtonText = styled.Text`
    color: white;
    font-size: 18px;
`

const AdminScreen: React.FC = () => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'ADMIN PANEL', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
            <Page>
                
                <View style={{marginTop: 30}}>
                    <Heading>Select your option <option value=""></option></Heading>
                    <ButtonContainer>
                        <SummonButton color="#e74c3c">
                            <SummonButtonText> Add Zone </SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#e74c3c">
                            <SummonButtonText> Add Card </SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#e74c3c">
                            <SummonButtonText> Add Door</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#2980b9">
                            <SummonButtonText> Find Zone </SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#2980b9">
                            <SummonButtonText> Find Card </SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#f1c40f">
                            <SummonButtonText> Show all cards </SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#f1c40f">
                            <SummonButtonText> Show Card In Zone </SummonButtonText>
                        </SummonButton>
                    </ButtonContainer>
                </View>
                
            </Page>            
        </View>
    )
}

export default AdminScreen