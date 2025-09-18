export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: Date;
  role: "admin" | "user" | "deliveryman";
}

export interface AdminApiConfig {
  baseURL: string;
  isProduction: boolean;
}
