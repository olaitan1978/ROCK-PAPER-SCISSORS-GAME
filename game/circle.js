let buttons=document.querySelectorAll("img")
let nono=document.getElementById("im")
let user_choice=document.getElementById("user")
let computer_choice=document.getElementById("comp")
let result=document.getElementById("res")
let score=document.getElementById("score")
let comp_count=0
let user_count=0
let dodo=["Rock","Paper","Scissors"]
let lolo

buttons.forEach(rocky=>rocky.addEventListener("click",(e)=>{
    lolo=e.target.id
    user_choice.innerHTML=lolo
    user_choice.style.color="green"

    let fond=dodo[Math.floor(Math.random()*3)]
    computer_choice.innerHTML=fond
    computer_choice.style.color="red"

    if(fond===lolo){
        result.innerHTML="it's a tie"
    }else if(lolo=="Rock" && fond=="Paper"){
        result.innerHTML="Computer has won!!!!!!!!!!!!!"
        comp_count++
    }else if(lolo=="Scissors" && fond=="Rock"){
        result.innerHTML="Computer has won!!!!!!!!!!!!!"
        comp_count++
    }else if(lolo=="Paper" && fond=="Scissors"){
        result.innerHTML="Computer has won!!!!!!!!!!!!!"
        comp_count++
    }else if(fond=="Rock" && lolo=="Paper"){
        result.innerHTML= nono.value +" have won!!!!!!!!!!!!!"
        user_count++
    }else if(fond=="Scissors" && lolo=="Rock"){
        result.innerHTML= nono.value +" have won!!!!!!!!!!!!!"
        user_count++
    }else if(fond=="Paper" && lolo=="Scissors"){
        result.innerHTML= nono.value +" have won!!!!!!!!!!!!!"
        user_count++
    }
 
    score.innerHTML=`You have scored ${user_count} while Computer has scored ${comp_count}`
    if(comp_count===5||user_count===5){

        alert("SORRY!!! GAME OVER "+ nono.value+ " SCORED " + user_count + " AND COMPUTER SCORED "+ comp_count + " \nTHANK YOU FOR PLAYING MY GAME")
        window.location.reload()
       
        
    }
 
}))








