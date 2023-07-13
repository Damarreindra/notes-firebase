import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const REGISTER_USER = "REGISTER_USER"

export const registerUser = (data)=>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:REGISTER_USER,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({
                            type:REGISTER_USER,
                            payload:{
                                loading:false,
                                data:user,
                                errorMessage:false
                            }
                        })
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch({
                            type:REGISTER_USER,
                            payload:{
                                loading:false,
                                data:false,
                                errorMessage:errorMessage
                            }
                        })
            });

        // axios({
        //     method:"POST",
        //     url:"https://63686402edc85dbc84e5d542.mockapi.io/todos",
        //     timeout:120000,
        //     data: data
        // })
        // .then((res)=>{
        //     dispatch({
        //         type:REGISTER_USER,
        //         payload:{
        //             loading:false,
        //             data:res.data,
        //             errorMessage:false
        //         }
        //     })
        // })
        // .catch((err)=>{
        //     dispatch({
        //         type:REGISTER_USER,
        //         payload:{
        //             loading:false,
        //             data:false,
        //             errorMessage:err.message
        //         }
        //     })
        // })
    }
}

