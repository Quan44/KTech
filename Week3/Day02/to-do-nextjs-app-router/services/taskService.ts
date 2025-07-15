export const baseUrl = 'https://server.aptech.io';

export const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNTYzODg4LCJleHAiOjE3ODQxMjE0ODh9.Fa2OguQbgTgeyisqMZBDETj0QNqbodmDoZ99fhKALw0`,
};

export const getTasks = async () => {
    const response = await fetch(`${baseUrl}/workspaces/tasks`, {
        headers: defaultHeaders,
    });
    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }
    return response.json()
}

export const getTasksSSR = async () => {
    const response = await fetch(`${baseUrl}/workspaces/tasks`, {
        headers: defaultHeaders,
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }
    return response.json()
}