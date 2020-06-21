import React from 'react'
import './intervalo.css'
import Card from './card'
import { connect } from 'react-redux'
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'

var valoresPorps = null;
const Intervalo = props => {
    const {min , max} = props;
    valoresPorps = props
    return(
        <Card title='Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínino:</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterarNumeroMaximo(+e.target.value)} />
                </span>

            </div>

        </Card>
    )

}

const mapStateToProps = state => { //pega os valores do storage que eu quero
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
} 

const mapActionDispatchToProps =function(dispatch){ //acessa as actions para manipular os storages
    return{
        alterarMinimo(numero){
            //action creator -> action
            const action = alterarNumeroMinimo(numero)
            dispatch(action)
        },
        alterMaximo(numero){
            const action = alterarNumeroMaximo(numero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapActionDispatchToProps)(Intervalo)