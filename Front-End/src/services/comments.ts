import Icomments from "../types/Comments"
import intansce from "./intansce"

export const GetAllcomment = () => {
    return intansce.get('/Comments/')
}

export const GetOnecomment = (_id: string) => {
    return intansce.get('/Comments/' + _id)
}

export const Updatecomment = (data: Icomments) => {
    return intansce.put('/Comments/' + data._id, data)
}

export const Removecomment = (_id: string) => {
    return intansce.delete(`/Comments/${_id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}