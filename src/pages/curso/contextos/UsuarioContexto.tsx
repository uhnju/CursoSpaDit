import { createContext, ReactNode } from "react";

/********************************************
 * CONTEXTO GLOBAL: Creación y proveedor de datos compartidos
 *******************************************/

interface Usuario {
  NIF: string;
  Nombre: string;
  Comunidad: string;
  Ciudad: string;
}

export const UsuarioContexto = createContext<Usuario | null>(null);


interface UsuarioContextoProviderProps {
  children: ReactNode;
}

export const UsuarioContextoProvider = ({ children }: UsuarioContextoProviderProps) => {
  const usuario = {
    NIF: "1234578A",
    Nombre: "Alberto Garcia",
    Comunidad: "Madrid",
    Ciudad: "Arganda"
  };

  return (
    <UsuarioContexto.Provider value={usuario}>
      {children}
    </UsuarioContexto.Provider>
  );
};