//Convert feet to meter
function footToMeter(foot) {
    let meter;
    meter = 0.305 * foot;
    return meter;
}

//Convert meter to feet
function meterToFoot(meter) {
    let foot;
    foot = 3.279 * meter;
    return foot;
}

function convertToFeet() {
    let input1 = parseInt(document.getElementById('meter1').value);
    let result1 = meterToFoot(input1);
    document.getElementById('feet1').innerText = result1;
}

function convertToMeter() {
    let input2 = parseInt(document.getElementById('feet2').value);
    let result2 = footToMeter(input2);
    document.getElementById('meter2').innerText = result2;
}
