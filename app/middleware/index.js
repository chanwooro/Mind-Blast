import axios from 'axios'

const apiHandler = store => next => action =>{
    console.log('middleware fired');
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