import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export const Message = {
  success: (msg: string) => toast.success(msg, { toastId: undefined }),
  error: (msg: string) => toast.error(msg, { toastId: undefined }),
  info: (msg: string) => toast.info(msg, { toastId: undefined }),
  warning: (msg: string) => toast.warning(msg, { toastId: undefined }),
};

type MessageType = keyof typeof Message;

const ToastProvider = () => {
  return <ToastContainer position="top-right" autoClose={3000} stacked />;
};

export default ToastProvider;

interface NotifyMessageProps {
  message?: string;
  type?: MessageType;
}

export const NotifyMessage = ({
  message,
  type = "info",
}: NotifyMessageProps) => {
  useEffect(() => {
    if (message && Message[type]) {
      Message[type](message);
    }
  }, [message, type]);

  return null;
};
