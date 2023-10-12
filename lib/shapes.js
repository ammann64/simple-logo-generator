const setWidth = '300px';
const setHeight = '200px';

class Shape {
    constructor(text, textColor, width, height, color) {
        this.text = text;
        this.textColor = textColor;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

class Rectangle extends Shape {
    constructor(text, textColor, width, height, color) {
        super(text, textColor, width, height, color);
    }
}

class Triangle extends Shape {
    constructor(text, textColor, width, height, color) {
        super(text, textColor, width, height, color);
        //The following points create a triangle with equal sides
        this.PointOneX = width / 2;
        this.PointOneY = 0;
        this.PointTwoX = 0;
        this.PointTwoY = height;
        this.PointThreeX = width;
        this.PointThreeY = height;
    }
}
class Circle extends Shape {
    constructor(text, textColor, width, height, color) {
        super(text, textColor, width, height, color);
        this.xPos = width / 2;
        this.yPos = height / 2;
        if (height < width) {this.radius = height / 2 - 5;}
        else {this.radius = width / 2 - 5;}
    }
}

module.exports = {
    Rectangle,
    Triangle,
    Circle
}