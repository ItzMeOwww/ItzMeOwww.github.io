var isMobile = false;
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    isMobile = true;
}

var two = new Two({
    type: Two.Types["canvas"],
    fullscreen: true,
    autostart: true,
}).appendTo(document.body);
var force = new Two.Vector();
var circle = two.makeCircle(72, 100, 50);
circle.fill = "#FF8000";
circle.stroke = "orangered"; // Accepts all valid css color
circle.linewidth = 5;
circle.translation.set(two.width / 2, two.height / 2);

var styles = {
    family: "proxima-nova, sans-serif",
    size: isMobile ? 20 : 50,
    leading: 50,
    weight: 900,
};

var text = two.makeText("Hi", two.width / 2, two.height / 2, styles);
two.bind("resize", function () {
    circle.translation.set(two.width / 2, two.height / 2);
    text.translation.set(two.width / 2, two.height / 2);
}).bind("update", function () {
    if (
        circle.translation.x + force.x >= 0 &&
        circle.translation.x + force.x <= two.width
    ) {
        circle.translation.x += force.x;
    }
    if (
        circle.translation.y + force.y >= 0 &&
        circle.translation.y + force.y <= two.height
    ) {
        circle.translation.y += force.y;
    }
});

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    var str = absolute + " " + alpha + " " + beta + " " + gamma;
    if (beta == 0) force.y = 0;
    else if (beta > 0) force.y = beta / 10;
    else force.y = beta / 10;

    if (gamma == 0) force.x = 0;
    else if (gamma > 0) force.x = gamma / 10;
    else force.x = gamma / 10;
    // $("#show").text(str);
    if (beta != null && gamma != null)
        text.value = Math.round(beta) + " " + Math.round(gamma);
    console.log(force);
}
