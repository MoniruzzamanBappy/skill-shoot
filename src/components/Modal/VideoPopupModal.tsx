import Modal from "@/components/Modal/Modal";
import { MdClose } from "react-icons/md";

interface ModalOpenCloseProps {
  open: boolean;
  handleClose: () => void;
}

const VideoPopupModal = ({ open, handleClose }: ModalOpenCloseProps) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      className="sm:w-[600px] w-full pt-12 bg-slate-200"
    >
      <div>
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 rounded-md p-2 bg-amber-600 bg-opacity-50 hover:text-red-600"
        >
          <MdClose size={24} />
        </button>
        <iframe
          className="w-full aspect-video h-[350px] rounded-md border-2 border-red-500"
          allow="autoplay"
          allowFullScreen
          src="https://www.youtube.com/embed/9P8mASSREYM?si=5uv33NqSWbosf3Au"
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoPopupModal;
