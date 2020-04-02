import React,{useState} from 'react';

import  {Animated, TouchableOpacity} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from '~/components/Menu';

import{Container,Content,Card,CardHeader,CardContent,CardFooter,Title,Description,Annotation} from './styles';

export default function Main(){

  const [visibility, setVisibility] = useState(false)

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,  //quando foi deslisado para cima ou para baixo
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }


  return(
   <Container>
     <Header />

     <Content>
       <Menu  translateY={translateY} />
      
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >  
      {/* transform serve para modificar um elemento */}
       <Card style={{
         transform:[{ 
            translateY: translateY.interpolate({
            inputRange: [-350, 0, 380],
            outputRange: [-50, 0, 380],
            extrapolate: 'clamp',
          }),
         }]
       }}> 
         <CardHeader>
           <Icon name="attach-money" size={28} color="#666" />
           <TouchableOpacity onPress={()=>{setVisibility(!visibility)}}>

             {visibility ? 
              <Icon name="visibility-off" size={28} color="#666"/> 
             :
             <Icon name="visibility" size={28} color="#666"/>
             }
           </TouchableOpacity>
           
         </CardHeader>
         <CardContent>
         <Title> Saldo diponível</Title>
           { visibility &&
              <Description>R$ 00,00 </Description>
           }

         </CardContent>
         <CardFooter>
             <Annotation>
                 Compra mais recente no valor de R$ 50,00...
             </Annotation>
         </CardFooter>
       </Card>
       </PanGestureHandler>
     </Content>
     <Tabs   translateY={translateY}/>
   </Container>
  )
};
