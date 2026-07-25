"use client";

import { Button } from "./shadcnui/button";
import { toast } from "./shadcnui/toast";

const ToastButton = () => {
  return (
    <Button
      onClick={() =>
        toast.add({ title: "Hello there 👋🏻", description: "Happy to see you." })
      }
      size={"lg"}>
      Click Me!
    </Button>
  );
};

export default ToastButton;
