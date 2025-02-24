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
