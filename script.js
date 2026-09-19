const places = {

  creative: {
    type: "SHOPPING · LIFE",
    title: "日禾島文創街",
    description:
      "靠近海岸的生活街區。這裡聚集了島民經營的小型工作室、插畫店、選物店、咖啡館與手作商店。文創街共有不同街區，而我們目前只記錄了其中一部分。"
  },

  market: {
    type: "SHOPPING · BUSINESS",
    title: "Onigiri Market",
    description:
      "飯糰所經營的商店，也是他目前事業發展的重要起點。店內商品會隨著日禾島的時間、季節與活動持續更新。"
  },

  museum: {
    type: "ART · CULTURE",
    title: "日禾島美術館",
    description:
      "日禾島上的藝術與文化空間。除了展覽，也會不定期募集島民作品，讓新的創作真正進入日禾島。"
  },

  station: {
    type: "TRANSPORT · CITY",
    title: "海景站",
    description:
      "位於日禾島海岸附近的車站。從這裡步行可以前往文創街與海邊步道，也是島民日常使用的交通節點之一。"
  },

  cinema: {
    type: "CULTURE · MOVIE",
    title: "日禾島電影院",
    description:
      "島民看電影與分享作品的地方。未來，來自島外創作者的作品也可能真正出現在這裡。"
  }

};


function openPlace(placeName) {

  const place = places[placeName];

  if (!place) {
    return;
  }

  document.getElementById("modalType").textContent =
    place.type;

  document.getElementById("modalTitle").textContent =
    place.title;

  document.getElementById("modalDescription").textContent =
    place.description;

  document
    .getElementById("placeModal")
    .classList.add("show");

  document.body.style.overflow = "hidden";
}


function closeModal() {

  document
    .getElementById("placeModal")
    .classList.remove("show");

  document.body.style.overflow = "";
}


function showComingSoon() {

  alert(
    "島民共創計畫仍在準備中。\n\n有一天，你的作品也可能真正出現在日禾島。"
  );

}


/* 點擊彈出視窗外面的背景，也可以關閉 */

document
  .getElementById("placeModal")
  .addEventListener("click", function(event) {

    if (event.target === this) {
      closeModal();
    }

  });


/* 按鍵盤 ESC 可以關閉視窗 */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);


/* 網站載入完成 */

window.addEventListener(
  "load",
  function() {

    console.log(
      "Welcome to Rihe Island."
    );

  }
);
