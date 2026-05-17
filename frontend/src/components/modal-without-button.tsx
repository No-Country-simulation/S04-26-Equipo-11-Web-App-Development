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
} from "@/components/ui/alert-dialog"

export function ModalWithoutButton({toggle, title, description, actionText, showAction=false, cancelText="Cancel", children}: {toggle: React.ReactNode, title: string, description: string, actionText?: string, showAction?: boolean, cancelText?: string, children?: React.ReactNode}) {
    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
            {toggle}
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
                {description}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>{cancelText}</AlertDialogCancel>
            {showAction && (
                <AlertDialogAction>{actionText}</AlertDialogAction>
            )}
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}
