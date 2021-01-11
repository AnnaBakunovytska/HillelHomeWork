

// function Figure(x, y, color) {
//   this.x = x;
//   this.y = y;
//   this.color = color;
// }

// function Line(x1, y1, x2, y2, color) {
//   Figure.call(this, x1, y1, color);
//   this.x2 = x2;
//   this.y2 = y2;
//   this.draw = function (context) {
//     context.strokeStyle = color;
//     context.beginPath();
//     context.moveTo(x1, y1);
//     context.lineTo(x2, y2);
//     context.stroke();
//   };
// }


// function Circle(x, y, r, color) {
//   Figure.call(this, x, y, color);
//   this.r = r;
//   this.draw = function (context) {
//     context.fillStyle = color;
//     context.beginPath();
//     context.arc(x, y, r, 0, 2 * Math.PI);
//     context.fill();
//   }

// }

// function Rect(x, y, w, h, color) {
//   Figure.call(this, x, y, color);
//   this.width = w;
//   this.hight = h;
//   this.draw = function (context) {
//     context.fillStyle = color;
//     context.fillRect(x, y, w, h);
//   };
// }



// function Canvas(canvas) {
//   if (new.target !== Canvas) {
//     throw new Error('Наследование запрещено!')
//   }
//   let context = document.getElementById("canvasID").getContext('2d');

//   this.add = function (value) {
//     for (let i = 0; i < arguments.length; i++) {
//       arguments[i].draw(context);
//     }
//   };
// }



// function Zip(y1, y2) {
//   this.y1 = y1;
//   this.y2 = y2;
//   this.draw = function (context) {
//     context.strokeStyle = 'red';
//     for (let x = 0; x < 800; x++) {
//       context.beginPath();
//       context.moveTo(x, y1);
//       x += 10;
//       context.lineTo(x, y2);
//       context.moveTo(x, y2);
//       x += 10;
//       context.lineTo(x, y1);
//       context.stroke();
//     }
//   };
// }

// let background = new Rect(0, 0, 800, 600, '#8FFFF8');
// let gross = new Rect(0, 460, 800, 140, '#1D9200');
// let lineGross = new Line(0, 460, 800, 460, '#1E5410');
// let sun = new Circle(490, 130, 60, '#FFDE32');
// let treeTrunk1 = new Rect(170, 340, 30, 200, '#774141');
// let treeTrunk2 = new Rect(323, 370, 20, 136, '#774141');
// let treeTrunk3 = new Rect(640, 387, 24, 168, '#774141');
// let tree1 = new Circle(183, 264, 145, 'rgba(31, 157, 0, 0.7)');
// let tree2 = new Circle(333, 321, 97, 'rgba(31, 157, 0, 0.7)');
// let tree3 = new Circle(652, 321, 99, 'rgba(31, 157, 0, 0.7)');
// let sunLine1 = new Line(365, 135, 398, 135, '#FFDE32');
// let sunLine2 = new Line(400, 225, 431, 192, '#FFDE32');
// let sunLine3 = new Line(492, 218, 492, 262, '#FFDE32');
// let sunLine4 = new Line(565, 192, 600, 226, '#FFDE32');
// let sunLine5 = new Line(577, 135, 623, 135, '#FFDE32');
// let sunLine6 = new Line(544, 81, 577, 48, '#FFDE32');
// let sunLine7 = new Line(425, 81, 392, 48, '#FFDE32');
// let sunLine8 = new Line(492, 29, 492, 50, '#FFDE32');
// let zip = new Zip(0, 10);


// let drawArea = new Canvas('canvasID');
// drawArea.add(background, gross, sun, lineGross, tree1, tree2, tree3, treeTrunk1, treeTrunk2, treeTrunk3);
// drawArea.add(sunLine1, sunLine2, sunLine3, sunLine4, sunLine5, sunLine6, sunLine7, sunLine8, zip);




// Новое дз

// class Figure {
//   constructor(x, y, color) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//   }
// }

// class Line extends Figure {
//   constructor(x1, y1, x2, y2, color) {
//     super(x1, y1, color)
//     this.x2 = x2;
//     this.y2 = y2;
//   }
//   draw(context) {
//     context.strokeStyle = this.color;
//     context.beginPath();
//     context.moveTo(this.x, this.y);
//     context.lineTo(this.x2, this.y2);
//     context.stroke();
//   };
// }

// class Circle extends Figure {
//   constructor(x, y, r, color) {
//     super(x, y, color);
//     this.r = r;
//   }
//   draw(context) {
//     context.fillStyle = this.color;
//     context.beginPath();
//     context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//     context.fill();
//   };
// }

// class Rect extends Figure {
//   constructor(x, y, w, h, color) {
//     super(x, y, color)
//     this.width = w;
//     this.hight = h;
//   }
//   draw(context) {
//     context.fillStyle = this.color;
//     context.fillRect(this.x, this.y, this.width, this.hight);
//   };
// }



// class Canvas {
//   constructor() {
//     this.context = document.getElementById("canvasID").getContext('2d');
//     if (this.constructor !== Canvas) {
//       throw new Error('Наследование запрещено!')
//     }
//   }
//   add(value) {
//     for (let i = 0; i < arguments.length; i++) {
//       arguments[i].draw(this.context);
//     }
//   }
// }


// class Zip {
//   constructor(y1, y2) {
//     this.y1 = y1;
//     this.y2 = y2;
//   };
//   draw(context) {
//     context.strokeStyle = 'red';
//     for (let x = 0; x < 800; x++) {
//       context.beginPath();
//       context.moveTo(x, this.y1);
//       x += 10;
//       context.lineTo(x, this.y2);
//       context.moveTo(x, this.y2);
//       x += 10;
//       context.lineTo(x, this.y1);
//       context.stroke();
//     }
//   }
// }

// let background = new Rect(0, 0, 800, 600, '#8FFFF8');
// let gross = new Rect(0, 460, 800, 140, '#1D9200');
// let lineGross = new Line(0, 460, 800, 460, '#1E5410');
// let sun = new Circle(490, 130, 60, '#FFDE32');
// let treeTrunk1 = new Rect(170, 340, 30, 200, '#774141');
// let treeTrunk2 = new Rect(323, 370, 20, 136, '#774141');
// let treeTrunk3 = new Rect(640, 387, 24, 168, '#774141');
// let tree1 = new Circle(183, 264, 145, 'rgba(31, 157, 0, 0.7)');
// let tree2 = new Circle(333, 321, 97, 'rgba(31, 157, 0, 0.7)');
// let tree3 = new Circle(652, 321, 99, 'rgba(31, 157, 0, 0.7)');
// let sunLine1 = new Line(365, 135, 398, 135, '#FFDE32');
// let sunLine2 = new Line(400, 225, 431, 192, '#FFDE32');
// let sunLine3 = new Line(492, 218, 492, 262, '#FFDE32');
// let sunLine4 = new Line(565, 192, 600, 226, '#FFDE32');
// let sunLine5 = new Line(577, 135, 623, 135, '#FFDE32');
// let sunLine6 = new Line(544, 81, 577, 48, '#FFDE32');
// let sunLine7 = new Line(425, 81, 392, 48, '#FFDE32');
// let sunLine8 = new Line(492, 29, 492, 50, '#FFDE32');
// let zip = new Zip(0, 10);


// let drawArea = new Canvas('canvasID');
// drawArea.add(background, gross, sun, lineGross, tree1, tree2, tree3, treeTrunk1, treeTrunk2, treeTrunk3);
// drawArea.add(sunLine1, sunLine2, sunLine3, sunLine4, sunLine5, sunLine6, sunLine7, sunLine8, zip);
