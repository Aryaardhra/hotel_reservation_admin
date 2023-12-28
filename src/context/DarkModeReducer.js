const DarkModeReducer = (state, action) => {

    switch(action.type){
        case "WHITE" : {
            return {
                darkMode:false,
            }
        }
        case "DARK" : {
            return {
                darkMode:true,
            }
        }
        case "TOGGLE" : {
            return {
                darkMode:!state.darkMode,
            }
        }
        default:
            return state;
    }
};

export default DarkModeReducer;