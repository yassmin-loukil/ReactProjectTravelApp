import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Image } from 'react-native';

//import { Images } from "assets/images";
interface argsProps {
  title?: string;
  description?: string;
  image?: any;
  rewardCoins?: number;
  tagText?: string;
  withTag?: boolean;
  tagColor1: string;
  tagColor2: string;
}

const CustomCard = ({
  title,
  description,
  image,
  tagColor1,
  tagColor2,
  tagText,
  withTag,
}: argsProps) => {
  //const { description, quiz, title, id, image , rewardCoins } = item;
  //const defaultBg = Images.bgCardSondage;
  return (
    <View
      style={{
        marginTop: 20,
        width: '100%',
        height: 190,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#eeeeee',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          borderRadius: 12,
          flex: 1.7,
          overflow: 'hidden',
        }}
      >
        <ImageBackground
          //source={image ? {uri: image} : defaultBg }
          source={{ uri: image }}
          style={{
            padding: 20,
            flex: 1,
            borderRadius: 30,
          }}
        >
          {/*start TagPoint */}

          {withTag && (
            <View
              style={{
                justifyContent: 'space-between',
              }}
            >
              <LinearGradient
                colors={[tagColor1, tagColor2]}
                style={{
                  width: 'auto',
                  paddingHorizontal: 8,
                  height: 35,
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 'auto',
                }}
              >
                <Text style={{ lineHeight: 18, marginRight: 10, color: 'white' }}>{tagText}</Text>
                <Image
                  source={require('../../assets/favicon.png')}
                  style={{ width: 20, height: 20 }}
                />
              </LinearGradient>
            </View>
          )}

          {/*end TagPoint */}
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={[styles.title, { color: '#3F4254' }]}>{title}</Text>
        <Text style={styles.description}>
          {description} {/* : min - {quiz} : Questions */}
        </Text>
      </View>
    </View>
  );
};

export default CustomCard;
const styles = StyleSheet.create({
  title: {
    lineHeight: 22,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 6,
  },
});
