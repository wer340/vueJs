new Vue({
    el:'#app',
data:{
    healthBar:100,
    monstarBar:100,
    gameRuning:false,
    turns:[],
}
,
methods:{

gameStart:function(){
    this.gameRuning=true;
    this.healthBar=100;
    this.monstarBar=100;
    this.turns=[];
   
},
attack:function(){
var demage=this.calcDemage(3,10);
    this.monstarBar -=demage
        this.turns.unshift({isplayer:true,text:'player hints monster demage' +demage});

    demage=this.calcDemage(5,13);
    this.healthBar -=demage
    this.turns.unshift({isplayer:false,text:'player is demage' +demage});
    this.checkWin();
   
},
specialAttack:function(){
    var demage=this.calcDemage(6,17);
    this.monstarBar -=demage;
    this.turns.unshift({isplayer:true,text:'player hints monster demage special attack' +demage});

    demage=this.calcDemage(5,13);
    this.healthBar -=demage;
    this.turns.unshift({isplayer:false,text:'player is  demage in special attack' +demage});
    this.checkWin();
},
heal:function(){
if(this.healthBar<=90){
    this.healthBar +=10;
    this.turns.unshift({isplayer:true,text:'player is  heal  ' +10});
}else{
    this.healthBar =100;
}
this.healthBar -=demage;
this.turns.unshift({isplayer:false,text:'player is  demage  ' + demage});
this.checkWin();
},
giveUp:function(){
this.gameRuning=false;
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