 (function(){

	var Shot = window.Shot =function(){
		this.x = game.scene.ship.x +game.res["ship_center"].width;
		this.oldx = this.x;
		this.y = game.scene.ship.y + +game.res["ship_center"].height/2;
		game.shotArr.push(this);
	};
	
	Shot.prototype.render = function(){
		game.ctx.fillRect(this.x, this.y, 30, 2);
		game.ctx.fillStyle = "linear-gradient(to right, #ee0979, #ff6a00)";	
	};
	var a = 0;
	Shot.prototype.update = function(){
		this.x+=6;
		if(this.x-this.oldx>game.canvas.width/2-100){
				for(var i=0; i <  game.shotArr.length; i++){
					if( game.shotArr[i] == this){
				 		game.shotArr.splice(i,1);
		
				}
			}
		}
		// 子弹碰到敌机子弹消失
		for(var i = 0 ; i < game.enemyArr.length ; i ++){		
			if(this.x >=game.enemyArr[i].x 
				&& 
				this.x <=(game.enemyArr[i].x + game.enemyArr[i].enemyWidth)
				&&
				this.y >=game.enemyArr[i].y
				&&
				this.y <=(game.enemyArr[i].y + game.enemyArr[i].enemyHeight)
				){
				this.goDie();
				game.enemyArr[i].count++;
				game.enemyArr[i].boom();
				game.enemyArr[i].goDie();
				game.score+=100;
			
			}
		}
	};
	Shot.prototype.goDie = function(){
		for(var i=0; i <  game.shotArr.length; i++){
			if( game.shotArr[i] == this){
				 game.shotArr.splice(i,1);
		
			}
		}
	};
})()
