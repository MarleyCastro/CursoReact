import style from './Frase.module.css'

function frase() {
    return (
        <div className={style.fraseContainer}>
            <p className={style.fraseContent}>Meu primeiro componente</p>
        </div>
    )
}

export default frase