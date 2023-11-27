const fetcher = (...args) => fetch(...args).then((res) =>

{

    

    return res.json()
}


);

export default fetcher