import React from 'react'
import { useQuery,gql } from '@apollo/client'
const QUERY_ALL_USERS= gql`
{
    users{
name
id
username

    }
}


`
const DataDisplay = () => {
    const {data, loading,error}=useQuery(QUERY_ALL_USERS)
    if(loading){
        return <div>Loading....</div>
    }
    if(error){
        return <div style={{color:'red'}}>there was an error </div>
    }
    if(data){
        return (
            <>
           {data?.users.map((user,i)=> <div key={i}>{user.name} </div>
       )}
       </>
          )
    }
  
  
  
}

export default DataDisplay