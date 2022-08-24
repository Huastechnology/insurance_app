export interface RequestError extends Error {
    response: unknown
    data: unknown
}

export default async function fetchJson(...args: Parameters<typeof fetch>){
    try{
        const[url,config] = args
        const response = await fetch('http://localhost:4000' + url,config)
        if( response.status === 204){
            return{
                status:204,
                message: 'No Content',
                data:{}
            }
        }

        const data = await response.json()

        if( response.ok){
            return data
        }

        const error = new Error(response.statusText) as RequestError
        error.response = response
        error.data = data
        throw error
    }catch(error){
        const parsedError = error as RequestError

        if(!parsedError.data){
            parsedError.data = {message: parsedError.message}
        }
        throw parsedError
    }
}