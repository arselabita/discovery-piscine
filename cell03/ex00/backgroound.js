function RGBcolor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + R + "," + G + "," + B + ")";
    document.body.style.backgroundColor = randomColor;
}