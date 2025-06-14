
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OnboardingModalProps {
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onClose }) => {
  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-background rounded-2xl shadow-2xl p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-charcoal leading-heading mb-2">
            Welcome to Your Consultation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-body">
            Please tell us about yourself so we can match you with the right specialist.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <Button
            onClick={onClose}
            className="w-full btn-primary"
            aria-label="Close onboarding and get started with the form"
          >
            Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
