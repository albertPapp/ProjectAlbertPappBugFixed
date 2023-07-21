import Phaser from "phaser";

export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super("VictoryScene");
    this.victory;
  }

  preload() {
    this.load.audio("victory", "audio/victory.mp3");
  }

  create() {
    this.victory = this.sound.add("victory", {
      loop: false
    });
    this.victory.play();
    this.add
      .text(400, 200, "YOU WON!", {
        fontSize: "120px",
        fill: "#fff"
      })
      .setOrigin(0.5);
    const name = this.registry.get("name");

    if (!this.registry.get("level2Done")) {
      var score = this.registry.get("score1");

      this.add
        .text(
          400,
          550,
          `${name},
Your score is: ${score}`,
          {
            fontSize: "60px",
            fill: "#fff",
            align: "center"
          }
        )
        .setOrigin(0.5);

      this.add
        .text(400, 900, "Click anywhere to continue", {
          fontSize: "32px",
          fill: "#fff"
        })
        .setOrigin(0.5);

      this.input.on("pointerup", (pointer) => {
        this.scene.start("Level2");
      });
    } else {
      var score1 = this.registry.get("score1");
      var score2 = this.registry.get("score2");

      this.add
        .text(
          400,
          550,
          `Congratulations, 
${name}!
Your final score is:
${score1 + score2}`,
          {
            fontSize: "60px",
            fill: "#fff",
            align: "center"
          }
        )
        .setOrigin(0.5);
    }
  }
}
