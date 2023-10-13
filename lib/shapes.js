const setWidth = '300px';
const setHeight = '200px';
const shapeOffset = 5;

class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.width = setWidth;
        this.height = setHeight;
        this.color = color;
    }
}

class Rectangle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, width, height, color);
        this.shapeWidth = width - shapeOffset;
        this.shapeHeight = height - shapeOffset;
        this.textPosX = this.shapeWidth / 2;
        this.textPosY =  this.shapeHeight / 2;
    }
}
Rectangle.prototype.formatRectangle = function () {
    let svg =  
    `<svg width=\"${setWidth}\" height=\"${setHeight}\">\n
        <rect width=\"${this.shapeWidth}\" height=\"${this.shapeHeight}\" style=\"fill:${this.color};\">\n
        <text x=\"${this.textPosX}\" y=\"${this.textPosY}\" fill=\"${this.textColor}\">${this.text}</text>\n
    </svg>`;
    return svg;
}

class Triangle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, width, height, color);
        //The following points create a triangle with equal sides
        this.PointOneX = width / 2;
        this.PointOneY = 0;
        this.PointTwoX = 0;
        this.PointTwoY = height;
        this.PointThreeX = width;
        this.PointThreeY = height;
        this.textPosX = this.PointOneX;
        this.textPosY = height / 4;
    }
}
Triangle.prototype.formatTriangle = function () {
    let svg = 
    `<svg width=\"${setWidth}\" height=\"${setHeight}\">\n
        <polygon points=\"${this.PointOneX},${this.PointOneY} ${this.PointTwoX},${this.PointTwoY} ${this.PointThreeX},${this.PointThreeY}\" fill=\"${this.color}\">\n
        <text x=\"${this.textPosX}\" y=\"${this.textPosY}\" fill=\"${this.textColor}\">${this.text}</text>\n
    </svg>`;
}

class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, width, height, color);
        this.xPos = width / 2;
        this.yPos = height / 2;
        if (height < width) {this.radius = height / 2 - shapeOffset;}
        else {this.radius = width / 2 - shapeOffset;}
        this.textPosX = this.radius + shapeOffset;
        this.textPosY = this.radius + shapeOffset;
    }
}
Circle.prototype.formatCircle = function () {
    let svg =
    `<svg width=\"${setWidth}\" height=\"${setHeight}\">\n
        <circle cx=\"${this.xPos}\" cy=\"${this.yPos}\" fill=\"${this.color}\">\n
        <text x=\"${this.textPosX}\" y=\"${this.textPosY}\" fill=\"${this.textColor}\">${this.text}</text>\n
    </svg>`;
    return svg;
}


module.exports = {
    Rectangle,
    Triangle,
    Circle
}