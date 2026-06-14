import { createPortal } from "react-dom";
import "./modal.scss";

type modalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: modalProps) => {
  return createPortal(
    <div className="modal-container">
      <div className="modal-child">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
