
export const addNewQuestion = (jsonObject) => ({
    type: "ADD_NEW_QUESTION",
    jsonObject
});

//Multiple questions can be deleted at the same time. But also only one question can be deleted
export const deleteQuestion = (idArray) => ({ 
    type: 'DELETE_QUESTION',
    idArray
});

export const editQuestion = (id, values) => ({
    type: 'EDIT_QUESTION',
    id,
    values
});

//No API call
export const listQuestions = () => ({
    type: 'LIST_QUESTIONS'
});

//No API call
export const listTest = () => ({ //Test and Questions should be in the state during INITIAL LOAD
    type: 'LIST_TEST'
});

export const createTest = (qIds) => ({ // qIds contains question ids.
    type: 'CREATE_TEST',
    qIds
});

/** STATE DIFFERENTIATOR */
//Load question creation form when they click button
export const loadQuestionForm = () => ({
    type: 'LOAD_QUESTION_FORM'
});

export const displayQuestionById = (id) => ({
    type: "DISPLAY_QUESTION",
    id
});

