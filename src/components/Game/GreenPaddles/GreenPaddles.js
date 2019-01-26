import React, { Component } from "react";

export default class GreenPaddle extends Component {
  constructor(args) {
    super(args);
    this.position = args.position;
    this.wh = args.wh;
    this.ww = args.ww;
    this.width = 100;
    this.height = 25;
    this.velocity = 0.33333333333;
    this.sawblades = args.sawblades;
    this.name = "greenpaddle";
  }

  checkDistance(paddles) {
    let a;
    let b;
    let c;

    paddles.forEach(p => {
      a = this.position.x - p.position.x;
      b = this.position.y - p.position.y;
      c = Math.sqrt(a * a + b * b);
      if (c < 150 && c !== 0) {
        this.generateXandY(paddles);
      } else {
        return;
      }
    });
  }

  generateXandY(paddles) {
    this.position.x = Math.random() * (this.ww - 100) + 1;
    this.position.y = (Math.random() * this.wh + 1) * -2;
    this.checkDistance(paddles);
  }

  update(ctx, paddles) {
    this.position.y = this.position.y + this.velocity;
    ctx.fillStyle = "#0DFF47";
    ctx.fillRect(this.position.x, this.position.y, 100, 25);
    if (this.position.y > this.sawblades[0].startingY) {
      this.generateXandY(paddles);
    }
  }
}
