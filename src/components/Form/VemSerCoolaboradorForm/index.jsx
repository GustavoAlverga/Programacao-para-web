export default function ColaboradorForm( { className } ) {
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
          Universidade
          <input type="text" name="universidade" placeholder="Nome da universidade" />
        </label>
  
        <label>
          Número de Telefone
          <input type="tel" name="telefone" placeholder="(99) 99999-9999" />
        </label>
  
        <button type="submit">Enviar</button>
      </form>
    );
  }