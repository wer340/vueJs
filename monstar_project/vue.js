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
    var max=10;
   var min=3;
  
    var demage=Math.max(Math.floor( Math.random()* max)+1,min);
    this.monstarBar -=demage;
    if( this.monstarBar<=0){
        alert('you won!');
        this.gameRuning=false;
        return
    }
    max=13;
     min=5;
    
    demage=Math.max(Math.floor( Math.random()* max)+1,min);
    this.healthBar -=demage;
    if( this.healthBar<=0){
        alert('you lost!');
        this.gameRuning=false;
       
    }
},
specialAttack:function(){

},
heal:function(){

},
giveUp:function(){

}

}


})