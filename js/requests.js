export async function GetAllSuppliers(url){
    let response
    let error

    await axios.get(url)
    .then(res=> response=res.data)
    .then(err=> error=err)

    return{
        response,
        error
    }
}




export async function GetDataById(url,id){
    let response
    let error

   await axios.get(`${url}/${id}`)
    .then(res=>response=res.data)
    .catch(err=>error=err)

    return{
        response,
        error
    }
}


export async function PostData(url,newData){
    let response
    let error

   await axios.post(url,newData)
    .then(res=>response=res.data)
    .catch(err=>error=err)

    return{
        response,
        error
    }
}





export async function UpdateData(url,id,updateData){
    let response
    let error

   await axios.put(`${url}/${id}`,updateData)
    .then(res=>response=res.data)
    .catch(err=>error=err)

    return{
        response,
        error
    }
}