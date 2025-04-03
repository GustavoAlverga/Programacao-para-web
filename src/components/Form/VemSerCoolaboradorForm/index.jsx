export default function ColaboradorForm({ className }) {
    return (
        <form className={className}>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Universidade" />
            <input type="tel" placeholder="Número de Telefone" />
            <button type="submit">Enviar</button>
        </form>
    );
}
