export const generarNifAleatorio = () => {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = Math.floor(10000000 + Math.random() * 90000000);
    const letra = letras[numero % 23];
    return `${numero}${letra}`;
}

export const validaNif = (nif:string) => {
  const regex = /^[0-9]{8}[A-Z]$/i;
  if (!regex.test(nif)) return false;
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let numero = parseInt(nif.substring(0, 8), 10);
  let letraCalculada = letras[numero % 23];
  return letraCalculada === nif.slice(-1).toUpperCase();
};
