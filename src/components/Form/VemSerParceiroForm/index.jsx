export default function EmpresaAssociarForm( { className } ) {
    return (
      <form className={className}>
        <label>
          Nome da Empresa
          <input type="text" name="empresa" placeholder="Ex: Tech Solutions Ltda." />
        </label>
  
        <label>
          CNPJ
          <input type="text" name="cnpj" placeholder="00.000.000/0000-00" />
        </label>
  
        <label>
          Nome do Representante
          <input type="text" name="representante" placeholder="Ex: João Silva" />
        </label>
  
        <label>
          Email de Contato
          <input type="email" name="email" placeholder="contato@empresa.com" />
        </label>
  
        <label>
          Telefone
          <input type="tel" name="telefone" placeholder="(99) 99999-9999" />
        </label>
  
        <label>
          Setor de Atuação
          <input type="text" name="setor" placeholder="Ex: Tecnologia, Educação, Marketing..." />
        </label>
  
        <button type="submit">Enviar Solicitação</button>
      </form>
    );
  }
  