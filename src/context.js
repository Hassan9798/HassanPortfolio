import{createContext, useReducer} from 'react';
export const ThemeContext=createContext();
const INITIAL_STATE={
    darkmode:false
};
const ThemeReducer=(state,action)=>{
    switch(action.type){
        case'TOGGLE':
        return {darkmode:!state.darkmode};
        default:
            return state
    }
}
export const ThemeProvider=({children})=>{
    const [state,dispatch]=useReducer(ThemeReducer,INITIAL_STATE);
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {children}
        </ThemeContext.Provider>



    )
}