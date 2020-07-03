import axios from 'axios'
import {createStore, createHook} from 'react-sweet-state'
interface IState {
    course?: any;
}

const initialState : IState = {
    course : []
};

const actions = {
    fetchCourse: () => ({setState, getState}: any) => {
        axios
            .get(
                "https://5ef2b40425da2f001622827d.mockapi.io/course",
            )
            .then((response) => {
                console.log(response.data);
                setState({
                    course: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },

    createCourse : (payload: any) => ({ setState, getState } : any) => {
        axios
            .post(
                "https://5ef2b40425da2f001622827d.mockapi.io/course",
                payload
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

const Store = createStore({initialState, actions});
const useCourse = createHook(Store);

export default useCourse;