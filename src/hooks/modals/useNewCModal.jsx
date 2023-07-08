import { create } from "zustand";

const useNewCModal = create((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("c-modal is open");
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));

export default useNewCModal;
