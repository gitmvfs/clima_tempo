import './card.css'

function Card(props){
    console.log(props)

    return(
    <div className='card-container'>

        <h3>{props.nome_cidade}, {props.nome_estado} </h3>
        <h2>Temp: {props.temp_atual} °C</h2>

        <div className='card-info-content-container'> 

            <div className='card-info-content'>
                <img src={props.img_madrugada} alt='Imagem madrugada'></img>
                <h4>Madrugada</h4>
            </div>

            <div className='card-info-content'>
                <img src={props.img_manha} alt='Imagem manha'></img>
                <h4>Manhã</h4>
            </div>
            <div className='card-info-content'>
                <img src={props.img_tarde} alt='Imagem tarde'></img>
                <h4>Tarde</h4>
            </div>
            <div className='card-info-content'>
                <img src={props.img_noite} alt='Imagem noite'></img>
                <h4>Noite</h4>
            </div>
            <div className='card-info-content'>
                <h4>Max: {props.temp_max} °C</h4>
                <h4>Min: {props.temp_min} °C</h4>
            </div>


        </div>
        <h4>Ultima atualização: {props.ultima_att} </h4>

    </div>)
       
}

export default Card