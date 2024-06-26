import { getCookie } from 'cookies-next';
import API from '../../src/constant/API'
import { cookies } from 'next/headers'

export const indexAuthor = async () => {
    const cookie = getCookie('token_user', { cookies })
    
    const response = await fetch(`${API}authors/get`, {
        headers:{
            'Authorization': `Bearer ${cookie}`
        }
    })
    return await response.json()
}

export const getAuthor = async (endPoint, id) => {
    const response = await fetch(`${API}${endPoint}/${id}`)
    return await response.json()
}

export const editAuthor = async (endPoint, params, id) => {
    try {
        const response = await fetch(`${API}${endPoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        return response.status;
    } catch (error) {
        return error;
    }
};

export const register = async (endPoint, params) => {
    try{
        const response = await fetch(`${API}${endPoint}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })

        return response;
    } catch (error){
        return error;
    }
}

export const login = async (endPoint, params) => {
    try {
        const response = await fetch(`${API}${endPoint}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })

        return response
    } catch (error) {
        return error
    }
}