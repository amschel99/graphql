const {fakeData}= require('../fakeData');
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
    }
}

};
module.exports={resolvers}