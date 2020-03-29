import React from 'react';

import  {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from '~/components/Menu';

import{Container,Content,Card,CardHeader,CardContent,CardFooter,Title,Description,Annotation} from './styles';

export default function Main(){


  const translateY= new  Animated.Value(0);

  //pega   a posição e evia para o tranletedY 
  const  animetedEvent = Animated.event([
   {
      nativeEvent:{
          // translationX:translateX
           translationy:translateY
      }
   }
  ],{
    useNativeDriver:true 
  })
  function onHandlerStateChange(event){

  }

  return(
   <Container>
     <Header />

     <Content>
       <Menu />
      
      <PanGestureHandler
        onGestureEvent={animetedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >  
      {/* transform serve para modificar um elemento */}
       <Card style={{
         transform:[{
           translateY,
         }]
       }}> 
         <CardHeader>
           <Icon name="attach-money" size={28} color="#666" />
           <Icon name="visibility-off" size={28} color="#666" />  
         </CardHeader>
         <CardContent>
             <Title> Saldo diponível</Title>
             <Description>R$ 20.000,00 </Description>
         </CardContent>
         <CardFooter>
             <Annotation>
                 Compra mais recente no valor de R$ 50,00...
             </Annotation>
         </CardFooter>
       </Card>
       </PanGestureHandler>
     </Content>
     <Tabs />
   </Container>
  )
};
