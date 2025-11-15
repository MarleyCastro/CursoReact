
function Evento({ numero }) {
    function meuEvento() {
        console.log(`fui ativado ${numero}`)
    }

    return (
        <div>
            <p>Clique para atiuvar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento