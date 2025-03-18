import { useState } from "react";

const EjemplosTSX: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Nombre: ${nombre}, Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default EjemplosTSX;
