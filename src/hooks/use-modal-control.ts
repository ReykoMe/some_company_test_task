import { useCallback, useState } from "react";

export type UseModalControlReturnType = {
  isOpen: boolean;
  open: VoidFunction;
  close: VoidFunction;
};

export function useModalControl(): UseModalControlReturnType {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}
