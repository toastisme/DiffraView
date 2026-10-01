import type { ReactNode } from "react"
import {
  Toast,
  ToastClose,
  ToastCopy,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

function getMessageText(title: ReactNode, description: ReactNode) {
  return [title, description].filter((i) => typeof i === "string").join("\n")
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const messageText = getMessageText(title, description)
        return (
          <Toast key={id} {...props}>
            <div
              className="grid gap-1"
              // Stops highlighting the message being treated as a swipe,
              // which dismisses the toast
              onPointerDown={(e) => e.stopPropagation()}
            >
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription className="max-h-48 overflow-y-auto whitespace-pre-wrap">{description}</ToastDescription>
              )}
            </div>
            {action}
            {messageText && <ToastCopy value={messageText} />}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
