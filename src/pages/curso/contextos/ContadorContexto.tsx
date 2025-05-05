import { createContext, useState, useEffect, ReactNode } from "react";

/********************************************
 * CONTEXTO GLOBAL: Creación y proveedor de datos compartidos
 *******************************************/

interface ContadorContexto {
  contador: number;
  setContador: (valor: number) => void;
}

export const ContadorContexto = createContext<ContadorContexto>({
  contador: 0,
  setContador: () => {},
});

interface ContadorContextoProviderProps {
  children: ReactNode;
}

export const ContadorContextoProvider = ({ children }: ContadorContextoProviderProps) => {
  const [contador, setContador] = useState(() => {
    const valorAlmacenado = localStorage.getItem("contador");
    return valorAlmacenado ? parseInt(valorAlmacenado, 10) : 10;
  });

  useEffect(() => {
    localStorage.setItem("contador", contador.toString());
  }, [contador]);

  return (
    <ContadorContexto.Provider value={{ contador, setContador }}>
      {children}
    </ContadorContexto.Provider>
  );
};