import Phaser from "phaser";

import Level1 from "./Level1";
import TitleScene from "./TitleScene";
import GameOverScene from "./GameOverScene";
import VictoryScene from "./VictoryScene";
import NameScene from "./NameScene";
import Level2 from "./Level2";

var config = {
  parent: "div_id",
  type: Phaser.AUTO,
  dom: {
    createContainer: true,
    behindCanvas: false
  },
  backgroundColor: "#161616",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 1000
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },

  scene: [TitleScene, NameScene, Level1, Level2, GameOverScene, VictoryScene]
};

let game = new Phaser.Game(config);
