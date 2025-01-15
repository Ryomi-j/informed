type User = {
  id: string;
  email: string;
  name?: string;
};

export type TypeUserInfo = User & {
  password: string;
};

export type TypeUser = User & {
  auth_provider: string;
  profile_image?: string;
};

export type TypeAuthState = {
  user: TypeUser | null;
  isAuthenticated: boolean;
  setUser: (user: TypeUser | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};
