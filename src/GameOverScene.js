import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
    this.fail;
    this.retry;
  }

  preload() {
    this.load.audio("fail", "audio/fail.mp3");
  }

  create() {
    this.fail = this.sound.add("fail", {
      loop: false
    });
    this.fail.play();
    this.add
      .text(400, 200, "GAME OVER", {
        fontSize: "120px",
        fill: "#fff"
      })
      .setOrigin(0.5);

    var score;
    if (!this.registry.get("level1Done")) {
      score = this.registry.get("score1");
    } else {
      score = this.registry.get("score2");
    }

    const name = this.registry.get("name");

    this.add
      .text(
        400,
        550,
        `${name},
your score is: ${score}`,
        {
          fontSize: "60px",
          fill: "#fff",
          align: "center"
        }
      )
      .setOrigin(0.5);

    this.add
      .text(400, 900, "Click to retry", {
        fontSize: "32px",
        fill: "#fff"
      })
      .setOrigin(0.5);

    this.input.on("pointerup", (pointer) => {
      if (!this.registry.get("level1Done")) {
        this.scene.start("Level1");
      } else {
        this.scene.start("Level2");
      }
    });
  }
}
