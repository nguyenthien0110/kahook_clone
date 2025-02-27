// =========================BACKEND =================================
export interface ApiResponse<T> {
  status: number;
  message?: string;
  data?: T;
}

export function createResponse<T>(
  status: number,
  message: string = "",
  data?: T
): ApiResponse<T> {
  if (data) return { status, message, data };
  return { status, message };
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface InterfaceAlertDialog {
  title: string;
  content: string;
  open: boolean;
  handleLogout: () => void;
  handleClose: () => void;
  children: React.ReactElement | null;
}
