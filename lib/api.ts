
export class CustomApiError extends Error {
    status: number;
    constructor(url, status) {
        super(`${url} return ${status}`);
        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomApiError)
        }

        this.name = 'ApiError';
        this.status = status;
    }
}

export async function  fetchJson(url:string) {
    const res = await fetch(url);
    if(!res.ok) {
        throw new CustomApiError(url, res.status);        
    }
    return res.json();
}