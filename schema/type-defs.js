const {gql}= require('apollo-server');
const typeDefs=gql`
type User{
    id:ID!
    name:String!
    age:Int!
    username:String!
    nationality:Nationality!
    friends:[User!]
    favoriteMovies:[Movie!]
}
type Query{
    users:[User!]!
    user(id:ID!):User!
    movies:[Movie!]!
    movie(name:String!):Movie
}
input createUserInput{
name:String!
age:Int!
username:String!
nationality:Nationality=KENYAN

}
type Mutation{

createUser(input:createUserInput!):User!
updateUsername(input:updateUserInput!):User

}
input updateUserInput{
id:ID!
newUsername:String!
}
type Movie{
id:ID!,
name:String!,
yearOfPublication:Int!
isInTheaters:Boolean!


}
enum Nationality{
    KENYAN
    AMERICAN
    CANADIAN
    JAPANESE
}


`;
module.exports={typeDefs}