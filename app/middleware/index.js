import axios from 'axios'

const apiHandler = store => next => action =>{
    console.log('middleware fired');
    if(action.type === 'ADD_NEW_FOLDER'){
        axios.post('/api/create/folder/', {
            name: action.nane,
            id: action.id
        })
        .then(res=>{
            let result = next({
                type: action.type,
                data: res.data
            });
            console.log(res)
        });
    }



    axios.get('/api/contents/')
        .then(res=>{
            console.log(res.data);
            console.log('middleware successful')
            let result = next({
                type: action.type,
                data: res.data
            });
            return result;
        })

}

export default apiHandler