import React from 'react'

import {
  View,
  ScrollView,
  Text
} from 'react-native'

import { Feather, SimpleLineIcons } from '@expo/vector-icons'

import {
  Container,
  Header,
  TextHeader,
  ValueText,
  Balance,
  MainContent,
  CardContent,
  LevelCircle,
  LevelText,
  ProfileTextDescription,
  ProfileText,
  Title,
  ConquistaItem
} from './styles'

export default Profile = () => {
  return (
    <ScrollView>
      <Container>
        <Header>
          <TextHeader>
            <ValueText>R$1.659,85</ValueText>
            <Balance>Saldo disponível</Balance>
          </TextHeader>
          <Feather
            name="user"
            size={40}
            color="white"
          />
        </Header>

        <MainContent>
          <CardContent style={{ elevation: 3 }}>
            <LevelCircle>
              <LevelText>3</LevelText>
            </LevelCircle>

            <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20, marginTop: 20 }}>
              <ProfileText>Nivel de investidor</ProfileText>
              <ProfileTextDescription>iniciante</ProfileTextDescription>
            </View>
          </CardContent>

          <Title>Conquistas</Title>
          <ConquistaItem>
            <SimpleLineIcons name="graph" size={24} color="#4D4D4D" style={{ marginTop: 10 }}/>
            <Title style={{ width: '87%', fontSize: 16, marginLeft: 'auto', color: '#4D4D4D' }}>Você alcançou o nível 3. Parabéns, agora você conhece melhor sobre taxas e suas variações</Title>
          </ConquistaItem>
          <ConquistaItem>
            <SimpleLineIcons name="graph" size={24} color="#4D4D4D" style={{ marginTop: 10 }}/>
            <Title style={{ width: '87%', fontSize: 16, marginLeft: 'auto', color: '#4D4D4D' }}>Você alcançou o nível 2. Parabéns, agora você domina o que são os juros e os tipos de rendimento relacionado a ele</Title>
          </ConquistaItem>
          <ConquistaItem>
            <SimpleLineIcons name="graph" size={24} color="#4D4D4D" style={{ marginTop: 10 }}/>
            <Title style={{ width: '87%', fontSize: 16, marginLeft: 'auto', color: '#4D4D4D' }}>Você alcançou o nível 1. Parabéns, agora você já sabe o que são investimentos, a diferença entre investir e poupar e qual suas diferenças</Title>
          </ConquistaItem>
        </MainContent>
      </Container>
    </ScrollView>
  )
}