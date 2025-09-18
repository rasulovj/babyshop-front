import { create } from "zustand";

type ModalType =
  | "addUser"
  | "editUser"
  | "deleteUser"
  | "viewUser"
  | null
  | false;

interface ModalStore {
  openModal: ModalType;
  setOpenModal: (modal: ModalType) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  openModal: null,
  setOpenModal: (modal) => set({ openModal: modal }),
  closeModal: () => set({ openModal: null }),
}));

export default useModalStore;
