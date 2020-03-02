new Vue({
    el:'#app',
data:{
    healthBar:100,
    monstarBar:100,
    gameRuning:false,
}
,
methods:{

gameStart:function(){
    this.gameRuning=true;
    this.healthBar=100;
    this.monstarBar=100;
   
},
attack:function(){

    this.monstarBar -=this.calcDemage(3,10);



    this.healthBar -=this.calcDemage(5,13);
    this.checkWin();
   
},
specialAttack:function(){
    this.monstarBar -=this.calcDemage(6,17);



    this.healthBar -=this.calcDemage(5,13);
    this.checkWin();
},
heal:function(){
if(this.healthBar<=90){
    this.healthBar +=10;
   
}else{
    this.healthBar =100;
}
this.healthBar -=this.calcDemage(5,13);
this.checkWin();
},
giveUp:function(){

},
calcDemage:function(min,max){
return Math.max(Math.floor( Math.random()* max)+1,min);
}



,
checkWin:function(){
    if(this.monstarBar<=0){
        if(confirm("You win! start again?")){
            this.gameStart();
        }
        else{
            this.gameRuning=false;
        }
        return true;
    }
        else if(this.healthBar<=0){
            if(confirm("You lost! start again?")){
                this.gameStart();
            }
            else{
                this.gameRuning=false;
            }
            return true;   
        }
    return false;
}

}


})