let userQuery = `
    query{
        person(id : "2i9VcsmJqBhdI0tyOF54HG"){
            name
            age
        }
    }
`;

let loginQuery = (id) =>{
    let data = `
    query{
        personCollection(where:{name : "${id}"}){
          items{
            name
            age
          }
        }
      }
    `
    return data
}

export {
    userQuery,
    loginQuery
}
