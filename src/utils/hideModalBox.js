const hideModalBox = () => {
  const modalBox = document.getElementsByClassName("modal")[0];
  if (modalBox) {
    modalBox.remove();
  }
};

export default hideModalBox;
