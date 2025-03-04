document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
    let selectedStand = params.get("stand");

    let seatContainer = document.getElementById("seatContainer");

    if (!selectedStand) {
        seatContainer.innerHTML = "<p>Error: No stand selected!</p>";
        return;
    }

    let seatData = {
        north: ["Block A, Seat 76", "Block A, Seat 77", "Block B, Seat 45"],
        south: ["Block C, Seat 12", "Block C, Seat 34", "Block D, Seat 98"],
        east: ["Block E, Seat 21", "Block E, Seat 33", "Block F, Seat 19"],
        west: ["Block G, Seat 88", "Block H, Seat 56", "Block H, Seat 72"]
    };

    seatContainer.innerHTML = `<h2>Available Seats for ${selectedStand} Stand</h2>`;

    let seatList = document.createElement("ul");

    seatData[selectedStand].forEach(seat => {
        let seatItem = document.createElement("li");
        seatItem.innerHTML = `<button onclick="selectSeat('${seat}')">${seat}</button>`;
        seatList.appendChild(seatItem);
    });

    seatContainer.appendChild(seatList);
});

function selectSeat(seat) {
    alert(`You have selected: ${seat}`);
}
