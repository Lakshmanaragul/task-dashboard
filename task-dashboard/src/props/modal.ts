import { Task } from "@/modal/common";

export interface ModalProps {
  onClose: () => void;
  onAdd: (task: Task) => void;
}
