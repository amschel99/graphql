 const fakeData=[
    {
        id:1,
        name:'Amschel',
        age:20,
        username:'amschel_the_great',
        nationality:'KENYAN',
        friends:[
            {
                name:"Wade",
                age:20
            }, {
                name:"Parzival",
                age:21
            }
        ]
    },
    {
        id:2,
        name:'Wade',
        age:19,
        username:'Parzival',
        nationality:'AMERICAN'
    },
    {
        id:3,
        name:'Artimis',
        age:19,
        username:'Lyn byley',
        nationality:'CANADIAN'
    },
    {
        id:4,
        name:'Yagami',
        age:21,
        username:'kira',
        nationality:'JAPANESE'
    }
]
const fakeMovies=[
    {
        id:1,
        name:'Dark matter',
        yearOfPublication:2012,
        isInTheaters:true

    },
    {
        id:2,
        name:'Stranger things',
        yearOfPublication:2022,
        isInTheaters:true

    },
    {
        id:3,
        name:'Harry Potter ',
        yearOfPublication:1997,
        isInTheaters:true

    },
    {
        id:4,
        name:'Solitude in space',
        yearOfPublication:2032,
        isInTheaters:false

    }
]
module.exports={fakeData,fakeMovies}