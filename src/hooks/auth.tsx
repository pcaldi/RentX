import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { api } from "../services/api";
import { database } from "../database";
import { User as ModelUser } from "../database/model/User";

type UserProps = {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

// Compartilhar com a minha aplicação os dados através do contexto.
type AuthContextData = {
  user: UserProps;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updatedUser: (user: UserProps) => Promise<void>;
  loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// AuthProvider vai receber um filho, no caso as rotas da aplicação.
function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState(true);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { token, user } = response.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const userCollection = database.get<ModelUser>("users");
      await database.action(async () => {
        userCollection.create((newUser) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = token;
        });
      });

      setData({ ...user, token });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.action(async () => {
        const userSelected = userCollection.find(data.id);
        (await userSelected).destroyPermanently();
      });
      setData({} as UserProps);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updatedUser(user: UserProps) {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.action(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update((userData) => {
          userData.name = user.name;
          userData.driver_license = user.driver_license;
          userData.avatar = user.avatar;
        });
        setData(user);
      });
    } catch (error) {}
  }

  useEffect(() => {
    async function loadUserData() {
      const userCollection = await database.get<ModelUser>("users");
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as ModelUser;
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${userData.token}`;
        setData(userData);
        setLoading(false);
      }
    }
    loadUserData();
  });
  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
        updatedUser,
        loading,
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
