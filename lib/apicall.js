async function getRequest(url) {
    // const res = await fetch(`https://testapi.vinsys.com/${url}`);
    // const res = await fetch(`https://testapi.vinsys.com/${url}`,{ cache: 'no-store' });
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`,{ cache: 'no-store' });
    if (!res.ok) throw new Error('failed to fetch data')

    return await res.json()
}


export { getRequest }