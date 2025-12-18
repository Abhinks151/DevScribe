import type { User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

/**
 * 2. Create context
 */
export const AuthContext = createContext<AuthContextType | null>(null);
