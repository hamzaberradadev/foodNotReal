function generateOutput() {
    var clientName = document.getElementById("clientName").value;
    var commandId = document.getElementById("commandId").value;
    var output = document.getElementById("client");
    output.innerHTML = clientName;
    var output = document.getElementById("command");
    output.innerHTML = commandId.toUpperCase();
    // hide div with id "input"
    document.getElementById("input").style.display = "none";
    // show div with id "outputImage"
    document.getElementById("outputImage").style.display = "block";

}

function validateComande() {
    // unhide div with id "loadingImage"
    document.getElementById("outputImage").style.display = "none";
    document.getElementById("lastVideo").style.display = "block";
    var video = document.getElementById("myVideo");
    video.play
    video.muted = false;
}