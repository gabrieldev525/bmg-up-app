import React, { useEffect } from 'react'

import {
  View,
  Image
} from 'react-native'

export default Splash = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Initial')
    }, 4000)
  }, [])

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, width: '100%', justifyContent: 'center' }}>
      <Image source={require('../../../assets/UP.png')} style={{ width: '100%' }} />
    </View>
  )
}