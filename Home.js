import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"
import Images from './Images';
import Cat from './Cat'
import Matter from 'matter-js';
import Constants from './Constants';


export default class Home extends PureComponent {
  constructor() {
    super();
    this.entities = this.setupWorld();
  }


  setupWorld = () =>{
    let engine = Matter.Engine.create ({ enableSleeping: false});
    let world = engine.world;
    world.gravity.y = 0
    
    let cat = Matter.Bodies.rectangle(300, 200,100,120)

    Matter.World.add(world, [Cat])

    return { Cat:{body: cat, renderer:Cat}}

}

  render() {
    return (
     

      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={this.entities}>

        <StatusBar hidden={true} />

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

