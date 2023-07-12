import Icomments from "../types/Comments"
import intansce from "./intansce"

export const GetAllcomment = () => {
    return intansce.get('/products')
}

export const GetOnecomment = (_id: string) => {
    return intansce.get('/products/' + _id)
}

export const Updatecomment = (data: Icomments) => {
    return intansce.put('/products/' + data._id, data)
}

export const Removecomment = (_id: string) => {
    return intansce.delete(`/products/${_id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}