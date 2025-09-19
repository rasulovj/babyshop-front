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

export interface StatsData {
  counts: {
    users: number;
    products: number;
    categories: number;
    brands: number;
    orders: number;
    totalRevenue: number;
  };
  roles: { name: string; value: number }[];
  categories: { name: string; value: number }[];
  brands: { name: string; value: number }[];
}
