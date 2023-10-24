"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const ConfirmModal = ({ children, onConfirm }: ConfirmModalProps) => {
  const handleConfirm = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={(e: any) => e.stopPropagation()}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e: any) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
