

// // import React, { Component } from 'react';
// // import { View, Text, StyleSheet, Button, TouchableHighlightBase, ToastAndroid, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
// // import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// // import SearchBar from "../../components/SearchBar/index"
// // import Geolocation from '@react-native-community/geolocation';
// // import { Value } from 'react-native-reanimated';

// // export default class First extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.userLocation = this.userLocation.bind(this)
// //     this.state = {
// //       loading:false,

// //       initialRegion: {
// //        latitude:0,
// //        longitude:0,
// //        latitudeDelta: 0.0922,
// //        longitudeDelta: 0.0421,
// //       },
// //       // [{
// //       //   title: 'Haudin-Rd parking',
// //       //   coordinates: {
// //       //     latitude: 12.976206582253324,
// //       //     longitude: 77.61863331109372
// //       //   },
// //       // },
// //       // {
// //       //   title: 'G-Group Parking',
// //       //   coordinates: {
// //       //     latitude: 12.9743888,
// //       //     longitude: 77.6190986
// //       //   },
// //       // },
// //       // {
// //       //   title: 'Kensington Rd Garage',
// //       //   coordinates: {
// //       //     latitude: 12.973540158750769,
// //       //     longitude: 77.62035926008735
// //       //   },
// //       // }],
// //       marginBottom: 1

// //     };
// //   }
// //   async componentDidMount() {
// //     this.userLocation()
// //     // setTimeout(() =>
// //     //   this.setState({ marginBottom: 0 })
// //     // ), 100
// //   }
// //   userLocation = () => {
// //     this.setState({loading:true})
// //     Geolocation.getCurrentPosition((res)=>{

// //       console.log(res)
// //       this.setState({loading:false})
// //       //    this.map.animateToRegion({
// //       //   ...this.state.initialRegion,
// //       //   latitude: res.coords.latitude,
// //       //   longitude: res.coords.longitude
// //       // }, 2000)
// //       this.setState({
// //         latitude: res.coords.latitude,
// //         longitude: res.coords.longitude,
// //         loading:true
// //       })
// //     },
// //       err => {
// //         console.log(err)
// //       }

// //     )

// //     // Geolocation.getCurrentPosition((res) => {
// //     //   console.log(res)
// //     //   this.setState({loading:true})
// //     //   this.map.animateToRegion({
// //     //     ...this.state.initialRegion,
// //     //     latitude: res.coords.latitude,
// //     //     longitude: res.coords.longitude
// //     //   }, 2000)
// //     //   this.setState({
// //     //     latitude: res.coords.latitude,
// //     //     longitude: res.coords.longitude,
// //     //     loading:true
// //     //   })
// //     // },
// //     //   err => {
// //     //     console.log(err)
// //     //   }
// //     // )
// //   }
// //   onValueChange = initialRegion => {
// //     this.setState({ initialRegion })
// //   }


// //   render() {
// //     if (this.state.initialRegion){
// //     return (
// //     <View style={StyleSheet.absoluteFillObject}>


// //         <MapView
// //           style={StyleSheet.absoluteFillObject}
// //           provider={PROVIDER_GOOGLE}
// //           initialRegion={this.state.initialRegion}
// //           onRegionChangeComplete={this.onValueChange}
// //           ref={ref => this.map = ref}
// //           showsMyLocationButton={true}
// //           showsUserLocation={true}

// //           onMapReady={() => this.setState({ marginBottom: 0 })}

// //         >



// //           {/* {this.state.initialRegion.map((v, i) => {
// //             return ( */}
// //               <Marker 
// //                 coordinate={this.state.initialRegion}
// //                 title="test"
// //                 pinColor={"khaki"}

// //               />
// //             {/* )

// //           })} */}





// //         </MapView>
// //         <View style={{ position: 'relative', alignItems:"center" }}>
// //           <SearchBar />
// //         </View>
// //         {/* <ScrollView
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           style={{ position: "absolute", bottom: 10 }}
// //         >
// //           {this.state.initialRegion.map((v, i) => {
// //             return (
// //               <View key={i} style={{ height: 80, width: 150, backgroundColor: "white", margin: 10, borderRadius: 25, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
// //                 <Text>{v.title}</Text>
// //               </View>
// //             )

// //           })}

// //         </ScrollView> */}




// //       </View>
// //     );
// //         } return <ActivityIndicator size="large" color="black"/>
// //   }
// // }
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Animated, Dimensions, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import SearchBar from "../../components/SearchBar/index"
import Geolocation from '@react-native-community/geolocation';
import { RawData } from "../../components/RawData/index"
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
      show: false
    };
    marginBottom: 1
  }
  componentDidMount() {
    this.locate()
  }
  locate = () => {
    Geolocation.getCurrentPosition((res) => {
      console.log(res)
      this.setState({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
        coordinates: this.state.coordinates.concat({
          latitude: res.coords.latitude,
          longitude: res.coords.longitude
        })
      })
    },
      error => {
        console.log(error.message.toString());
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 0
      }
    )
  }

  render() {
    if (this.state.latitude && this.state.longitude) {
      return (
        <View style={StyleSheet.absoluteFillObject}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={StyleSheet.absoluteFillObject}
            showsMyLocationButton={true}
            showsUserLocation={true}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {(this.state.show) && RawData.map((v, i) => {
              return (
                <MapView.Marker
                  key={i}
                  title={v.title}
                  coordinate={v.coordinate}
                >
                  <Animated.View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50
                  }}>
                    <Animated.Image
                      source={require("../../assets/images/marker.png")}
                      style={{ height: 30, width: 20 }}
                    />
                  </Animated.View>
             
                </MapView.Marker>
              )
            })}


          </MapView>
          {/* <View style={{ position: 'relative', alignItems: "center" }}>
            <SearchBar />
          </View> */}
          {!this.state.show ? 
          <View  style={{ position: "absolute", bottom: 10 }}>
          <Button title="press" onPress={() => this.setState({ show: true })} />
          </View> : <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            style={{ position: "absolute", bottom: 10 }}

          >
            {RawData.map((v, i) => {
              return (
                <View key={i} style={{ height: 200, width: 350, backgroundColor: "white", marginHorizontal:10, borderRadius: 25,  elevation: 2 }}>
                  <View style={{}}>
                  <Text style={{fontSize:20,fontWeight:"bold"}}>{v.title}</Text>
                  </View>
                 {v.image.map((value,index)=>{
                   return(
                     <View style={{flexDirection:'row'}}>
                     <Icon key ={index}> {value.items}</Icon>
                   
                     </View>
                   )
                 })}
                </View>
              )

            })}

          </Animated.ScrollView>}

        </View>

      );
    } return <ActivityIndicator size="large" color="black" />
  }
}



{/* <View     style={{ position: "absolute", bottom: 10 }}>
<Button title="press" onPress={()=>this.setState({show:true})}/>
 {(this.state.show) &&     <Animated.ScrollView
  horizontal
  scrollEventThrottle={1}
  showsHorizontalScrollIndicator={false}

>
  {RawData.map((v, i) => {
    return (
      <View key={i} style={{ height: 80, width: 150, backgroundColor: "white", margin: 10, borderRadius: 25, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
        <Text>{v.title}</Text>
      </View>
    )

  })}

</Animated.ScrollView>
}
</View> */}



























































// import React, { Component } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import { RawData } from "../../components/RawData/index"

// export default class First extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//       show: false
//     };
//   }
//   found = () => {
//     this.setState({ show: true })
//   }
//   render() {
//     return (
//       <View>
//         {(this.state.show) && <FlatList
//           data={RawData}
//           renderItem={({ item, i }) => {
//             return (
//               <View k={i}>
//                 <Text>{item.title}</Text>
//               </View>
//             )
//           }}

//         />}
//         <Button title="press" onPress={this.found}></Button>
//       </View>
//     );
//   }
// }
