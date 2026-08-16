import { createPortal } from "react-dom";
import "./modal.scss";

type modalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: modalProps) => {
  return createPortal(
    <div className="modal-container" onClick={onClose}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
