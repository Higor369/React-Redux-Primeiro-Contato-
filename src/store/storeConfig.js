import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros : function(state, action){
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
            return {
                ...state,
                min: action.payload
            }
            case "NUM_MIM_ALTERADO":
                return {
                        ...state,
                        max: action.payload
                    }
                
            default:
                return {state}

        }     

    },
    nomes: function(state, action){
        return [
            'ana',
            'aaaa'
        ]
    }

})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig