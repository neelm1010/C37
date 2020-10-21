class Game{
    constructor()
    {

    }

    getState()
    {
        console.log("Lets get the game state:")
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log(gameStateRef)
    }
    update(state)
    {
       database.ref('/').update({
           gameState:state
       });
    }
    async start(){
        if(gameState===0)
        {
            console.log("New player getting created:")
            player=new Player();
            player.getCount();
            console.log("New Form is created:")
            form=new Form();
            form.display();
        }

    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
cars=[car1,car2,car3,car4];
    }
    play()
    {
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined)
        {
            var index=0;
             //x and y position of the cars
            var x = 0;
            var y;
           
            for(var plr in allPlayers)
            {
                 //add 1 to the index for every loop
                index = index + 1 ;
                //position the cars a little away from each other in x direction
                x = x + 200;

                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    cars[index-1].shapeColor="blue"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
                }

              
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }
          drawSprites();
    }

   
}
