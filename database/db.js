const Sequelize= require("sequelize")
const db={}
const sequelize= new Sequelize("sql12308692", "sql12308692","hE6hk1Trez", {
    host:'sql12.freesqldatabase.com',
    dialect:'mysql',
    operatorsAliases:false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

db.sequelize= sequelize
db.Sequelize=Sequelize

module.exports=db