import React, { Component } from "react";
import "./styles.css";
import Paddle from "../Paddles";
import RedPaddle from "../RedPaddles";
import Player from "../Player";
import GreenPaddle from "../GreenPaddles";
import SawBlade from "../SawBlade";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOn: false
    };

    this.canvasRef = React.createRef();
    this.paddles = [];
    this.redPaddles = [];
    this.sawblades = [];
    this.totalPaddles = [];
    this.player = null;
    this.wh = 600;
    this.ww = 900;
    this.direction = {};
    this.startScreen = false;
  }

  componentDidMount() {
    setInterval(() => requestAnimationFrame(() => this.gameLoop()), 15);
    this.resetGame();
    this.startScreen = true;
  }

  resetGame = () => {
    this.totalPaddles = [];
    this.sawblades = [];

    window.onkeydown = e => {
      this.direction[e.key] = true;
    };
    window.onkeyup = e => {
      delete this.direction[e.key];
    };

    this.ctx = this.canvasRef.current.getContext("2d");

    for (let i = 0; i < 5; i++) {
      this.totalPaddles.push(
        new RedPaddle({
          position: {
            x: Math.random() * this.ww + 1,
            y: (Math.random() * (this.wh * 2) + 1) * -1
          },
          ww: this.ww,
          wh: this.wh,
          sawblades: this.sawblades
        })
      );
    }

    for (let i = 0; i < 20; i++) {
      this.totalPaddles.push(
        new Paddle({
          position: {
            x: Math.random() * (this.ww - 100) + 1,
            y: (Math.random() * (this.wh * 2) + 1) * -1
          },
          ww: this.ww,
          wh: this.wh,
          sawblades: this.sawblades
        })
      );
    }

    for (let i = 0; i < 5; i++) {
      this.totalPaddles.push(
        new GreenPaddle({
          position: {
            x: Math.random() * this.ww + 1,
            y: (Math.random() * (this.wh * 2) + 1) * -1
          },
          ww: this.ww,
          wh: this.wh,
          sawblades: this.sawblades
        })
      );
    }

    this.totalPaddles.forEach(p => {
      p.generateXandY(this.totalPaddles);
    });

    this.player = new Player({
      positionX: this.ww / 2,
      paddles: this.totalPaddles,
      sawblades: this.sawblades,
      ww: this.ww,
      wh: this.wh
    });

    // for (let y = 700; y <= 1800; y += 100) {
    for (let x = 0; x <= 1000; x += 50) {
      this.sawblades.push(
        (this.sawblade = new SawBlade({
          startingX: x,
          startingY: 750
        }))
      );
    }
    // }
  };

  renderPaddles = () => {
    this.totalPaddles.forEach(p => {
      p.update(this.ctx, this.totalPaddles);
    });
  };

  renderRedPaddles = () => {
    this.totalPaddles.forEach(p => {
      p.update(this.ctx, this.totalPaddles);
    });
  };

  renderGreenPaddles = () => {
    this.totalPaddles.forEach(p => {
      p.update(this.ctx, this.totalPaddles);
    });
  };

  renderPlayer = () => {
    this.player.update(this.ctx, this.direction);
  };

  renderSawBlade = () => {
    this.sawblades.forEach(s => {
      s.update(this.ctx);
    });
  };

  gameLoop() {
    this.ctx.fillStyle = "#1D1E23";
    this.ctx.fillRect(0, 0, this.ww, this.wh);

    if (!this.player.death && !this.startScreen) {
      this.renderPaddles();
      this.renderRedPaddles();
      this.renderGreenPaddles();
      this.renderPlayer();
      this.renderSawBlade();
    } else if (!this.startScreen) {
      this.ctx.font = "50px Verdana";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Game Over", this.ww / 2 - 135, this.wh / 2 - 50);
      this.ctx.font = "30px Verdana";
      this.ctx.fillText(
        "Score " + this.player.score,
        this.ww / 2 - 65,
        this.wh / 2 + 50
      );
      this.ctx.font = "20px Verdana";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(
        "Hit Enter to restart",
        this.ww / 2 - 95,
        this.wh / 2 + 120
      );
      if ("Enter" in this.direction) {
        this.resetGame();
      }
    } else {
      this.ctx.font = "50px Verdana";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Start Game", this.ww / 2 - 135, this.wh / 2 - 50);
      this.ctx.font = "20px Verdana";
      // this.ctx.fillStyle = "red";

      this.ctx.fillText(
        "Left and Right Arrows to move",
        this.ww / 2 - 140,
        this.wh / 2 + 80
      );

      this.ctx.fillText(
        "Hit Enter to start",
        this.ww / 2 - 80,
        this.wh / 2 + 120
      );
      if ("Enter" in this.direction) {
        this.startScreen = false;
      }
    }
  }

  render() {
    return <canvas ref={this.canvasRef} width={this.ww} height={this.wh} />;
  }
}

export default Game;
