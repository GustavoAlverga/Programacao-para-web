export default function EmpresaAssociarForm({ className }) {
  return (
    <form className={className}>
      <label>
        Nome
        <input type="text" name="nome" placeholder="Digite seu nome completo" />
      </label>

      <label>
        Email
        <input type="email" name="email" placeholder="seuemail@exemplo.com" />
      </label>

      <label>
        Telefone
        <input type="tel" name="telefone" placeholder="(99) 99999-9999" />
      </label>

      <label>
        Assunto
        <input type="text" name="assunto" placeholder="Ex: Parceria, Dúvidas, etc." />
      </label>

      <label>
        Mensagem
        <textarea name="mensagem" placeholder="Escreva sua mensagem aqui..." rows={4} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}
