function square(a) {
    return a * a;
}

function rectangle(l, h) {
    return l * h;
}

function circle(r) {
    return Math.PI * r * r;
}

module.exports = {
    square: square,
    rectangle: rectangle,
    circle: circle
};