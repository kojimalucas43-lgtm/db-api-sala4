import s from './card.module.css'

export const Card = (props) => {
    return(
        <div className={s.card}>
            <div className={s.cardMain}>
                <div style={{ display: 'flex' }}>
                    <img className={s.cardImg} src={props.imagem} alt={props.nome} />

                    <div className={s.cardExtra}>
                        <h1>{props.nome}</h1>
                        <div className={s.cardInner}>
                            <h2>Raça : {props.especie}</h2> 
                            <h2>Ki : {props.ki}</h2> 
                            <h2>Ki Máximo : {props.maxki}</h2> 
                            <h2>Gênero : {props.gender}</h2> 
                            <h2>Afiliação : {props.affiliation}</h2> 
                        </div>
                    </div>
                </div>
                

                <h2>{props.nome}</h2> 
                <p>Especie : {props.especie}</p>
                <p>Ki : {props.ki}</p>
            </div>
            
        </div>
    )
}