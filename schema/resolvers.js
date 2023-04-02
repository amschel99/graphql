const {fakeData}= require('../fakeData');
const {fakeMovies}=require("../fakeData")
const _= require('lodash')
const resolvers={

Query:{
    users:()=>{
        return fakeData;
    },
    user:(parent, args)=>{
const id=args.id
const user= _.find(fakeData,{id:Number(id)})
return user;
    },
    movies:(parent,args)=>{
return fakeMovies;
    },
    movie:(parent,args)=>{
const name=args.name
const movie= _.find(fakeMovies, {name})
return movie
    }
},

User:{
favoriteMovies: ()=>{
    return _.filter(fakeMovies,(movie)=>movie.yearOfPublication>=2010)
}
},
Mutation :{
    createUser: (parent, args)=>{
const user=args.input
const lastId=fakeData[fakeData.length-1].id
user.id=lastId+1
fakeData.push(user)
return user;
    }
}

};
module.exports={resolvers}