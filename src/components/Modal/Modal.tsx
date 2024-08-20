import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ open, children, handleClose, className }: ModalProps) => {
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("modal")) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div
      className={twMerge(
        "fixed inset-0 w-full z-[100] bg-[rgba(0,0,0,0.9)] h-[100vh]",
        open ? "block" : "hidden"
      )}
    >
      <div
        className={twMerge(
          "modal absolute sm:p-0 p-4 inset-0 w-full h-full flex justify-center items-center"
        )}
      >
        <div
          className={twMerge(
            "h-fit overflow-auto relative bg-white rounded-xl shadow-md p-5 max-h-[90vh] overflow-y-auto animate-fadeIn",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
