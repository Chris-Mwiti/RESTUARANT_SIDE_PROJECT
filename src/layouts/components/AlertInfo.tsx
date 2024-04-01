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
} from "@/components/ui/alert-dialog";
import { useAlertDialogStatus, useAppActions } from "@/store/data.store";

export function AlertInfo() {
    const status = useAlertDialogStatus();
    const {setDialogState} = useAppActions();
  return (
    <AlertDialog open={status} onOpenChange={setDialogState}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unauthourized request</AlertDialogTitle>
          <AlertDialogDescription>
            Please go back to the login page to proceed with the checkout
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
