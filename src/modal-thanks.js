(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-thanks]"),
      closeModalBtn: document.querySelector("[data-modal-close-thanks]"),
      modal: document.querySelector("[data-modal-thanks]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-thanks");
    }
  })();
