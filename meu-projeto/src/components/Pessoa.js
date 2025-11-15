function Pessoa({ nome, idade, profissao, img }) {
    return <div>
        <img src={img} alt={nome}/>
        <h1>Nome: {nome}</h1>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
    </div>
}

export default Pessoa