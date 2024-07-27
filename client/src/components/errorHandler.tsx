import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ErrorHandler() {
  const { toast } = useToast();

  useEffect(() => {
    // Set up the global error handler
    window.onerror = function(message, source, lineno, colno, error) {
      console.log("onError");
      toast({
        title: "An error occurred",
        description: `${message} at ${source}:${lineno}:${colno}:${error}`,
        action: (
          <ToastAction altText="Close">Close</ToastAction>
        ),
      });
    };

    // Cleanup the error handler on component unmount
    return () => {
      window.onerror = null;
    };
  }, [toast]);

  return null;
}
