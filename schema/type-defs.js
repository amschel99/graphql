const {gql}= require('apollo-server');
const typeDefs=gql`
type User{
    id:ID!
    name:String!
    age:Int!
    username:String!
    nationality:Nationality!
    friends:[User!]
}
type Query{
    users:[User!]!
    user(id:ID!):User!
}
enum Nationality{
    KENYAN
    AMERICAN
    CANADIAN
    JAPANESE
}


`;
module.exports={typeDefs}