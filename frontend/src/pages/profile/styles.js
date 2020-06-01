import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background-color: #fe9a2e;
  padding: 100px 0 0;
  height: 100%;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
`

export const TextHeader = styled.View`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`

export const ValueText = styled.Text`
  font-size: 25px;
  color: white;
`

export const Balance = styled.Text`
  color: white;
`

export const MainContent = styled.View`
  background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 100%;
  margin-top: 10%;
  padding: 0 5%;
`

export const CardContent = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 7% 3%;
  border-radius: 14px;
  position: relative;
  margin: -10% auto 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const LevelCircle = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border: 6px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LevelText = styled.Text`
  font-size: 24px;
  color: #F6931F;
`

export const ProfileTextDescription = styled.Text`
  color: #ccc;
`
export const ProfileText = styled.Text`
  font-size: 18px;
  color: #F6931F;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #383838;
  margin-top: 10px;
`

export const ConquistaItem = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`