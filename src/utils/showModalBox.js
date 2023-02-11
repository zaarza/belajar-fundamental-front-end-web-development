import hideModalBox from "./hideModalBox";

const showModalBox = (title, desc, image, category, bahan) => {
  hideModalBox();
  const modalBox = document.createElement("div");
  modalBox.classList.add("modal");
  modalBox.innerHTML = `
    <div class="modal__inner">
      <h1 class="modal__title">${title}</h1>
      <p class="modal__category">Kategori : ${category}</p>
      <img class="modal__img" src="${image}" alt="${title}">
      <h3 class="modal__title2" >Daftar Bahan :</h3>
      <ol class="modal__ingredient">
        <li>${bahan[0]}</li>
        <li>${bahan[1]}</li>
        <li>${bahan[2]}</li>
        <li>${bahan[3]}</li>
        <li>${bahan[4]}</li>
        <li>${bahan[5]}</li>
        <li>${bahan[6]}</li>
        <li>${bahan[7]}</li>
        <li>${bahan[8]}</li>
        <li>${bahan[9]}</li>
      </ol>
      <h3 class="modal__title2" >Cara Membuat :</h3>
      <p class="modal__desc">${desc}</p>
      <button class="modal__close">x</button>
    </div>
  `;
  document.body.appendChild(modalBox);
  const close = document.body.getElementsByClassName("modal__close")[0];
  close.addEventListener("click", () => {
    hideModalBox();
  });
};

export default showModalBox;
