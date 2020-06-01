import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import {
  AntDesign,
  Entypo
} from '@expo/vector-icons';

import style from './style'
import Avatar from '../../static/AvatarM.png'

export default function Depositions(props) {

  const satisfaction = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Entypo
          name='star'
          color='yellow'
          size={20} />
      )
    }
    return stars
  }

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <AntDesign
            style={{ marginLeft: 10, marginTop: 20 }}
            name='left'
            size={30}
            color='white'
            onPress={() => {
              props.navigation.navigate('Initial')
            }}/>
        </View>

        <View style={style.containerDepositions}>
          <View style={style.textDepositions}>
            <Text style={style.title}>Depoimentos</Text>
            <Text
              style={style.link}
              onPress={() => {}}>Ver mais</Text>
          </View>

            <View style={style.containerUser}>
              <Image style={style.ImageAvatar} source={Avatar} />
              <View style={style.descritions}>
                <Text style={style.username}>Marcos Junior</Text>
                <Text style={style.ageUser}>25 ano</Text>
                <Text style={style.stars}>{satisfaction()}</Text>
              </View>
              <View style={style.containerDescription}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </Text>
              </View>
            </View>

            <View style={style.containerUser}>
              <Image style={style.ImageAvatar} source={Avatar} />
              <View style={style.descritions}>
                <Text style={style.username}>Marcos Junior</Text>
                <Text style={style.ageUser}>25 ano</Text>
                <Text style={style.stars}>{satisfaction()}</Text>
              </View>
              <View style={style.containerDescription}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </Text>
              </View>
            </View>

            <View style={style.containerUser}>
              <Image style={style.ImageAvatar} source={Avatar} />
              <View style={style.descritions}>
                <Text style={style.username}>Alek Junior</Text>
                <Text style={style.ageUser}>25 ano</Text>
                <Text style={style.stars}>{satisfaction()}</Text>
              </View>
              <View style={style.containerDescription}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </Text>
              </View>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView >
  )
}