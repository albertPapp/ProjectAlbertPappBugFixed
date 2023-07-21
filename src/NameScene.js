import Phaser from "phaser";

export default class NameScene extends Phaser.Scene {
  constructor() {
    super("NameScene");
  }

  preload() {
    this.load.html("form", "assets/form.html");
  }

  create() {
    const nameInput = this.add.dom(400, 400).createFromCache("form");

    this.message = this.add
      .text(400, 300, "Hello, --", {
        color: "#FFFFFF",
        fontSize: 60,
        fontStyle: "bold"
      })
      .setOrigin(0.5);

    this.message2 = this.add
      .text(400, 500, "Add your name and press Enter", {
        color: "#FFFFFF",
        fontSize: "32px",
        fontStyle: "bold"
      })
      .setOrigin(0.5);

    nameInput.addListener("keypress");
    nameInput.on("keypress", (e) => {
      if (e.code === "Enter") {
        let name = nameInput.getChildByID("text");
        if (name.value !== "") {
          this.message2.setVisible(false);
          this.message.setText("Hello, " + name.value);
          this.registry.set("name", name.value);
          name.value = "";
          nameInput.setVisible(false);
        }

        this.add
          .text(400, 900, "Click to start", {
            fontSize: "32px",
            fill: "#fff"
          })
          .setOrigin(0.5);
        this.input.on("pointerup", (pointer) => {
          this.scene.start("Level1");
        });
      }
    });
  }
}
