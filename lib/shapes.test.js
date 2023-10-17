const {Rectangle, Triangle, Circle} = require('./shapes');

describe('Rectangle', () => {
    //Test to verify that a rectangle svg formats correctly
    describe('Render', () => {
        it('should render the svg properly', () => {
            const rectangle = new Rectangle('AMC', 'blue', 300, 200, 'red');

            expect(rectangle.formatRectangle())
            .toEqual(
            `
    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\">\n
        <rect width=\"295\" height=\"195\" fill=\"red\"/>\n
        <text x=\"147.5\" y=\"97.5\" fill=\"blue\" font-size=\"60\" text-anchor=\"middle\">AMC</text>\n
    </svg>`);
        });
    });
});

describe('Triangle', () => {
    //Test to verify that a triangle svg formats correctly
    describe('Render', () => {
        it('should render the svg properly', () => {
            const triangle = new Triangle('AMC', 'blue', 300, 200, 'red');

            expect(triangle.formatTriangle())
            .toEqual( 
            `
    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\">\n
        <polygon points=\"150 0, 0 200, 300 200\" fill=\"red\"/>\n
        <text x=\"150\" y=\"133.33333333333334\" fill=\"blue\" font-size=\"60\" text-anchor=\"middle\">AMC</text>\n
    </svg>`);
        });
    });
});

describe('Circle', () => {
    //Test to verify that a circle svg formats correctly
    describe('Render', () => {
        it('should render the svg properly', () => {
            const circle = new Circle('AMC', 'blue', 300, 200, 'red');

            expect(circle.formatCircle())
            .toEqual(
            `
    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\">\n
        <circle cx=\"150\" cy=\"100\" r=\"95\" fill=\"red\"/>\n
        <text x=\"150\" y=\"100\" fill=\"blue\" font-size=\"60\" text-anchor=\"middle\">AMC</text>\n
    </svg>`);
        });
    });
});
