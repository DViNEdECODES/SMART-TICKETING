document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.getElementById("standSelect");

    dropdown.onchange = function() {
        let selectedStand = dropdown.value;
        if (selectedStand) {
            window.location.href = `seats.html?stand=${selectedStand}`;
        }
    };
});
