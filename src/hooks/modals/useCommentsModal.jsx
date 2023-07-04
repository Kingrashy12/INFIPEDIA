import { create } from "zustand";

const useEditEmailModal = create((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("Email Modal Opened");
    set({ isOpen: true });
  },
  onClose: () => {
    console.log("Email Modal Closed");
    set({ isOpen: false });
  },
}));

export default useEditEmailModal;
