const rooms = [
  "201","202",
  "301","302","303","305","306","308","310",
  "401","402","403"
];

const roomsDiv = document.getElementById("rooms");

rooms.forEach(room => {
  const card = document.createElement("div");
  card.className = "room-card";

card.onclick = () => {
    alert(room + "号室を選択しました");
};

card.innerHTML = `
    <h3>${room}号室</h3>
    <p>🟢 空室</p>
`;
roomsDiv.appendChild(card);
});