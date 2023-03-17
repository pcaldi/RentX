import React, { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

type UserProps = {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
};
// Estado de autenticação. Vou armazenar no estado.
type AuthState = {
  token: string;
  user: UserProps;
};

type SignInCredentials = {
  email: string;
  password: string;
};

// Compartilhar com a minha aplicação os dados através do contexto.
type AuthContextData = {
  user: UserProps;
  signIn: (credentials: SignInCredentials) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// AuthProvider vai receber um filho, no caso as rotas da aplicação.
function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setData({ token, user });
  }
  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
