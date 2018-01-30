//This reducer should have all question informations (description, question, answer, equation and so on)

const sideBarStatus = (state = [], action) =>{
    switch(action.type){
        case 'LIST_QUESTIONS':
        console.log('INSIDE REDUCER')
        console.log({
            status: 'LIST_QUESTION',
            questions: action.data
        });
        return {
            status: 'LIST_QUESTION',
            questions: action.data
        }
    
        case 'ADD_NEW_QUESTION':
            return {
                status: 'ADD_NEW_QUESTION',
                questions: [
                    ...state.questions,
                    {
                        id: action.id,
                        name: action.questionName,
                        details: action.details //<--- this is dummy, FILL WITH RIGHT PARAMETERS
                    }
                ]
            }
                
        case 'DELETE_QUESTION': //THIS WILL BE AN ACTION NAME FOR 'MIDDLEWARE' WHERE IT WILL HANDLE DATAS AND THEN DISPATCH ACTION "LIST_QUESTION"
            return //NOTHING SHOULD BE DONE HERE

        case 'EDIT_QUESTION': //THIS WILL BE AN ACTION NAME FOR 'MIDDLEWARE' WHERE IT WILL HANDLE DATAS AND THEN DISPATCH ACTION "LIST_QUESTION"
            return //NOTHING SHOULD BE DONE HERE
        
        default:
            return state;
    }
}

export default sideBarStatus;