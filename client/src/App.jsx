import React from 'react'
import DataDisplay from './DataDisplay'
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'
const App = () => {

  const client= new ApolloClient({
    cache:new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  })

  return (
    <ApolloProvider client={client}>
 <DataDisplay/>

    </ApolloProvider>
 
  )
}

export default App