import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },
  header: {
    height: 70,
    backgroundColor: '#fe9a2e',
  },
  containerDepositions: { },
  textDepositions: {
    flexDirection: 'row',
    margin: 30,
  },
  title: {
    fontSize: 20
  },
  link: {
    position: 'absolute',
    right: '10%',
    top: 6,
    fontSize: 16,
    color: '#fe9a2e',
  },
  containerUser: {
    width: '90%',
    paddingVertical: 10,
    marginBottom: '5%',
    marginLeft: 20,
    borderRadius: 14,
    elevation: 2,
  },
  ImageAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30,
  },
  descritions: {
    marginTop: '5%',
    alignSelf: 'center',
  },
  username: {
    color: '#000',
    fontSize: 16,
    alignSelf: 'center',
  },
  ageUser: {
    color: '#000',
    fontSize: 17,
    alignSelf: 'center',
  },
  stars: {
    marginTop: '2%'
  },
  containerDescription: {
    color: '#676767',
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',

  },
})