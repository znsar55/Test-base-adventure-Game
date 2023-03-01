const { name } = require('./inquirer')
const { stage } = require('./inquirer')
const { energ } = require('./inquirer')
const { weap } = require('./inquirer')
const { fd } = require('./inquirer')
const { drin } = require('./inquirer')
const { check } = require('./inquirer')
const { drg } = require('./inquirer')
const { quit } = require('./inquirer')
var stg1;
var enegy;
var dang = 0;
var wp;
var res ;
let player = {
    playerName: ""
}
const start = async () => {
    console.log('hello what is your name')
    player.playerName = await name()
    console.log(`hello ,${player.playerName}`)
    console.log(player.playerName)
    await stage1()
}



//start()

const stage1 = async () => {
    console.log('where do you want to play')
    stg1 = await stage()
    console.log(`you have choosen , ${stg1}`)
    await energy()
}



//var enegy ;
const energy = async () => {
    console.log('what energy level you want')
    enegy = await energ()
    console.log(`you have choosen , ${enegy}`)
    await checker2()
}
const checker2 = async () => {
    
    if ( stg1 == 'Jungle') {
        console.log('you have choosen jungle , you need drink and weapons ')
        console.log('because there are dangers like lions and tigers ')
        console.table({
            Energy:enegy,
           Danger:dang, 
            Path:stg1,
        })
        //await check()
        await weapon()
    } else if(enegy >=1 && stg1 =='River'){
        console.log('you are going in river so get some food')
        console.table({
            Energy:enegy,
           // Health:health,
           Danger:dang, 
            Path:stg1,
        })
        await food()
    }
        else if(enegy >=1 && stg1 =='Desert'){
        console.log('you are going in river so get some food')
        console.table({
            Energy:enegy,
           // Health:health,
           Danger:dang, 
            Path:stg1,
        })
        await drink()
    }
}
const checker = async () => {
    const check1 = await check()
    if (enegy >= 1 && check1 == 'weapon' && stg1==='Jungle') {
        await danger()
    }    
    else if (enegy >= 1 && check1 == 'food'&& stg1==='River') {
        await danger()
    }
    else if (enegy >= 1 && check1 == 'drink'&& stg1==='Desert') {
        await danger()
    }
    else
    {
        console.log('you loose the game Do you want to restart')
        res = await quit()
            if (res === true) {
                process.exit(1)

            } else {
                await energy()
            }  
    }

}
const drink = async () => {
    console.log('You need drink in your Journey')
    let drk = await drin()
    
    console.log(`you have choosen , ${drk}`)
    console.log(`energy now is,${enegy}`)

    if (enegy >= 1) {
        
        await checker()
    } else {

        console.log('you have no energy so buy some energy or quit')
    
            res = await quit()
                if (res === true) {
                    process.exit(1)

                } else {
                    await energy()
                }

        
        }
    }



const weapon = async () => {

    console.log('what weapon  you want')
    wp = await weap()
    enegy--
    console.log(`you have choosen , ${wp}`)
    console.log(`you energy is now ,${enegy}`)
    
    if (enegy >= 0 ) {
        await checker()
        
    } else {
     
        console.log('you cannot buy anything more')
          
            res = await quit()
                if (res === true) {
                    process.exit(1)

                } else {
                    await energy()
                }

        
        }
    }

    //    awaient ergy()


const food = async () => {
    console.log('which food do you like to buy')
    let food1 = await fd()
    console.log(`you have choosen , ${food1}`)
    enegy--
    //enegy--
    console.log(`you have choosen , ${food1}`)
    console.log(`you energy is now ,${enegy}`)

    if (enegy >= 0) {
        
     await checker()
    }else{
        return
    }
    //  await drink()
}
const danger = async () => {
    console.log('dangers are coming')
    let drg1 = await drg()
    console.log(`you are facing , ${drg1}`)
    
    
        if ( drg1 ==='Snakes') {
            
            console.log('snakes are there take your weapons out')
            
            enegy--
            dang++
            console.log(`your energy level is,${enegy}`)
            console.log(`your danger level is,${dang}`)
            console.log('you are loosing energy and incresing danger')
            
            if(wp =='knife'){
                console.log('you win the game')
                      
        
            } else{
                console.log('you loose')
                return
            }

        } else if ( drg1 === 'tiger') {

            console.log('tiger are very dangerous ')
            if(wp == 'gun'){
                console.log('you win the game')
                      
        
            } else{
                console.log('you loose')
                return

            }
            

        

        } else if

            (enegy <= 0 || dang>=5 ) {
            console.log('you have no energy')
            res = await quit()
                if (res === true) {
                    process.exit(1)

                } else {
                    await energy()
                }

        
        }

}

module.exports = {
    drink, food,dang
}
