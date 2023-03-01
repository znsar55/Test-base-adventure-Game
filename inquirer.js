const hero = require ('superheroes')
const inquirer = require('inquirer')
const name = async()=>{
    let{ obj }=await  inquirer.prompt({
     name :"obj",
     type:"input",
     message :"type your name"
    })
return obj
}

const stage =async ()=>{
 let {stg}= await inquirer.prompt({
    name:"stg",
    type:"list",
    message:"where do you want to go",
    choices:['Jungle','River','Desert']
 })
 return stg
}

const energ=async ()=>{
    let {enr}= await inquirer.prompt({
       name:"enr",
       type:"list",
       message:"what energy level you want",
       choices:['3','4','5','6']
    })
    return enr
   }
   const weap=async ()=>{
    let {wp}= await inquirer.prompt({
       name:"wp",
       type:"list",
       message:"what weapon do you want to buy",
       choices:['gun','knife','pistol']
    })
    return wp
   }

   const fd=async ()=>{
    let {fd1}= await inquirer.prompt({
       name:"fd1",
       type:"list",
       message:"what food you like",
       choices:['meat','bread','milk']
    })
    return fd1
   }
   const drin=async ()=>{
    let {dr}= await inquirer.prompt({
       name:"dr",
       type:"list",
       message:"drink choices are below",
       choices:[' water','tea','juice',]
    })
    return dr
   }
   const drg=async ()=>{
      let {dg}= await inquirer.prompt({
         name:"dg",
         type:"list",
         message:"one route has tigers other has snakes",
         choices:['Snakes','Tigers']
      })
      
      return dg
     }
     const quit=async ()=>{
      let {qt}= await inquirer.prompt({
         name:"qt",
         type:'confirm',
         message:"Do you want to quit",
         
         
      })
      return qt

     }
    
   const check =async ()=>{
    let {ch}= await inquirer.prompt({
       name:"ch",
       type:"list",
       message:"Select wisely according to route select",
       choices:['weapon','food','drink']

    })
    return ch
   }
module.exports = {
    name,stage,energ,weap,fd,drin,check,drg,quit
}