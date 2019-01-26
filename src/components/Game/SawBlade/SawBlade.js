import React, { Component } from "react";

class SawBlade extends Component {
  constructor(args) {
    super(args);
    this.rotationDegree = 0;
    this.startingX = args.startingX;
    this.startingY = args.startingY;
    this.outerRadius = 100;
    this.innerRadius = 85;
  }

  update(context) {
    let cx = this.startingX;
    let cy = this.startingY;
    let spikes = 30;

    let rot = (Math.PI / 2) * 3;
    let x = 0;
    let y = 0;
    let step = Math.PI / spikes;

    context.save();
    context.translate(cx, cy);
    context.rotate(this.rotationDegree / this.outerRadius);
    context.translate(-cx, -cy);
    context.beginPath();
    context.moveTo(cx, cy - this.outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * this.outerRadius;
      y = cy + Math.sin(rot) * this.outerRadius;
      context.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * this.innerRadius;
      y = cy + Math.sin(rot) * this.innerRadius;
      context.lineTo(x, y);
      rot += step;
    }

    context.lineTo(cx, cy - this.outerRadius);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.stroke();
    context.fillStyle = "grey";
    context.fill();
    context.restore();
    this.rotationDegree += 6;
    this.startingY -= 0.1;
  }
}

export default SawBlade;
