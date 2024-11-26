export async function GetAllSuppliers(url){
    let response
    let error

    await axios.get(url)
    .then(res=> response=res.data)
    .then(err=> error=err)

    return{
        res,
        error
    }
}