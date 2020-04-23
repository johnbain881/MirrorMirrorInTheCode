document.getElementById("message").addEventListener("keyup", () => {
    document.getElementById("right").innerHTML = event.target.value;
    document.getElementById("left").innerHTML = event.target.value
})