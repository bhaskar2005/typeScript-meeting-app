import React, { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MeetingMMSProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  img?: string;
  buttonIcon?: string;
}

const MeetingMMS = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  img,
  buttonIcon,
}: MeetingMMSProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" flex w-full max-w-[512px] flex-col gap-6 border-none px-6 py-9">
        <h1 className="{cn(' text-3xl font-sans font-bold leading-[42px]')}">
          {title}
        </h1>
        {children}
        <button
          className=" bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingMMS;
