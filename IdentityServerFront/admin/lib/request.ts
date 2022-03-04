async function request<T>(url: string, method: string, body?: string | FormData | null, additionalHeader?: { name: string, value: string } | null,
    format: 'JSON' | 'BLOB' = "JSON"): Promise<T | null> {
    const headers = new Headers();

    if (typeof body !== "object") {
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
    }

    if (additionalHeader) {
        headers.append(additionalHeader.name, additionalHeader.value);
    }

    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
    }

    //TODO hadle blob response

    const responseText = await response.text();
    if (!responseText) {
        return null;
    }

    return JSON.parse(responseText) as T;
}

export default request;
