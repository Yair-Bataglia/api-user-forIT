export async function getData(): Promise<any[]> {
    const res = await fetch('/api/users');

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
}