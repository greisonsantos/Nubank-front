import React from 'react';

import { Container,Code,Nav,NavItem,NavText,SignOut,SignOutText } from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Menu() {
  return (
    <Container>
      <Code >
          <QRCode
           value="http://awesome.link.qr"
           size={80}
           backgroundColor='#fff'
        />
      </Code>
      <Nav>
          <NavItem>
           <Icon  name="help-outline" size={20} color="#FFF"/>
           <NavText> Me ajuda</NavText>
          </NavItem>

          <NavItem>
           <Icon  name="person-outline" size={20} color="#FFF"/>
           <NavText> Perfil</NavText>
          </NavItem>


          <NavItem>
           <Icon  name="help-outline" size={20} color="#FFF"/>
           <NavText> Configuração de Cartão</NavText>
          </NavItem>

          <NavItem>
           <Icon  name="smartphone" size={20} color="#FFF"/>
           <NavText> Configurações do app</NavText>
          </NavItem>

          

          <SignOut>
             <SignOutText>SAIR DA CONTA</SignOutText>
          </SignOut>
      </Nav>  
    </Container>
  );
}
