import React, { Component } from "react";
// import sound from "../Sound/Jump.mp3";
// import stuck from "../Sound/Stuck.mp3";

class Player extends Component {
  constructor(args) {
    super(args);
    this.velocityY = 6;
    this.velocityX = 3;
    this.positionX = args.positionX;
    this.positionY = 0;
    this.height = 25;
    this.width = 25;
    this.paddles = args.paddles;
    this.sawblades = args.sawblades;
    this.wh = args.wh;
    this.ww = args.ww;
    this.jumpLength = 0;
    this.rising = false;
    this.collision = false;
    this.playercolor = "#84eaa7";
    this.score = 0;
    this.death = false;
  }

  componentDidMount() {
    this.render();
  }

  update(ctx, direction) {
    // let audio = new Audio(sound);
    // let stuckAudio = new Audio(stuck);
    this.jumpLength++;
    this.paddles.forEach(paddle => {
      if (
        this.positionX < paddle.position.x + paddle.width &&
        this.positionX + this.width > paddle.position.x &&
        this.positionY < paddle.position.y + paddle.height &&
        this.positionY + this.height > paddle.position.y
      ) {
        if (!this.collision && !this.rising) {
          this.collision = true;
        }
        if (paddle.name === "redpaddle") {
          this.playercolor = "red";
          this.positionY = paddle.position.y - this.height - 1;
          this.freeze = true;
          // stuckAudio.play();
          this.rising = false;
          setTimeout(() => {
            this.playercolor = "#84eaa7";
            this.jumpLength = 0;
            this.freeze = false;
            this.rising = true;
          }, 1500);
        }
        if (paddle.name === "greenpaddle" && !this.rising) {
          paddle.generateXandY(this.paddles);
          this.score++;
          console.log(this.score);
        }
      }
    });

    if (
      this.positionY + 100 > this.sawblades[0].startingY ||
      this.positionY > this.wh
    ) {
      console.log("DEATH");
      this.death = true;
    }

    if (!this.freeze) {
      if (this.rising && this.jumpLength > 25) {
        this.rising = false;
        this.jumpLength = 0;
      }
      if (this.positionY >= this.wh - this.height || this.collision) {
        if (this.collision) this.jumpLength = 0;
        this.rising = true;
        this.collision = false;
        // audio.play();
      }
      if (this.positionY <= 0) {
        this.rising = false;
      }

      if ("ArrowRight" in direction && this.positionX + 25 < this.ww) {
        this.positionX += this.velocityX;
      }
      if ("ArrowLeft" in direction && this.positionX > 0) {
        this.positionX -= this.velocityX;
      }
    }

    switch (true) {
      case this.rising:
        this.positionY -= this.velocityY;
        break;
      case this.freeze:
        this.positionY += 1;
        break;
      default:
        this.positionY += this.velocityY;
    }
    ctx.fillStyle = this.playercolor;
    ctx.fillRect(this.positionX, this.positionY, this.height, this.width);
  }
}

export default Player;
