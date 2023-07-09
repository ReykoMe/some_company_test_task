import { MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { Component } from "./styles";
import { ModalProps } from "./types";

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = (props) => {
  const { children, onClose, open } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const handleModalClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const refTarget = containerRef.current;
    const eventTarget = e.target;
    if (refTarget === eventTarget) onClose();
  };

  const handleKeyDown = useCallback(
    (callback: VoidFunction) => (e: KeyboardEvent) => {
      if (e.key === "Escape") callback();
    },
    []
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    open
      ? document.addEventListener("keydown", handleKeyDown(onClose))
      : document.removeEventListener("keydown", handleKeyDown(onClose));
  }, [open]);

  return (
    <Component.Root onClick={handleModalClick} ref={containerRef} open={open}>
      <Component.Content>{children}</Component.Content>
    </Component.Root>
  );
};
