(function(){
	var Ship = window.Ship = function(){
		
		this.imagesUp = [game.res["ship_up_1"],
		 				 game.res["ship_up_2"],
		 				 game.res["ship_up_3"]
		 				];
		this.imagesDown = [
						   game.res["ship_down_1"],
		 				   game.res["ship_down_2"],
		 				   game.res["ship_down_3"]
		 				];
		this.imagesDie =[
						 game.res["ship_center"],
						 game.res["ship_death_1"],
						 game.res["ship_death_2"],
						 game.res["ship_death_3"],
						 game.res["ship_death_4"],
						 game.res["ship_death_5"],
						 game.res["ship_death_6"],
						 game.res["ship_death_7"]

						];
		this.x = 0;
		this.y = game.canvas.height/2-50;
		this.life = 1;

		this.upCount = 0;
		this.downCount = 0;
		this.dieCount = 0;
		game.shipArr.push(this);
	};
	
	Ship.prototype.render = function(){
		
		this.dieCount<=7 &&game.ctx.drawImage(this.imagesDie[this.dieCount],this.x,this.y);
		
	};
	Ship.prototype.update = function(){
		// 碰撞敌机爆炸条件
		for(var i = 0 ; i < game.enemyArr.length ; i ++){
			 this.x1 = game.enemyArr[i].x;
			 this.x2 = game.enemyArr[i].x+game.enemyArr[i].enemyWidth;
			 this.y1 = game.enemyArr[i].y;
			 this.y2 = game.enemyArr[i].y+game.enemyArr[i].enemyHeight;
			if((this.x+64 >= this.x1&&this.y+64 >= this.y1&&this.y <= this.y2&&this.x<=this.x2)
				||
				(this.y+64 >=this.y1&&this.x+64 >= this.x1 && this.x <=this.x2&&this.y<=this.y2)
				||
				(this.y<=this.y2&&this.x+64>=this.x1&&this.x<=this.x2&&this.y+64>=this.y1)
			    ){
						game.f%3==0&&this.die();
						game.shotArr = [];

						if(game.life>0){
							this.live();
						}
				}
		}
			if(game.life == 0){
			game.shipArr = [];
			clearInterval(game.timer);
			game.ctx.save();
			game.ctx.fillStyle="rgba(150,150,150,0.5)";
			game.ctx.fillRect(400, 150, 200, 150);
			// game.ctx.fillStyle="rgba(150,150,150,0.5)";
			game.ctx.restore();
			game.ctx.save();
			game.ctx.fillStyle="#000";
			game.ctx.fillText(`游戏结束`,450, 230);
			game.ctx.fillText(`分数是：${game.score}`,450, 270);
			game.ctx.restore();
		}
	};
	Ship.prototype.live = function(){
		var self = this;
			 setTimeout(function(){
			 		self.dieCount = 0;
			 		if(game.f%50 == 0 ){
			 			game.life --;
			 		}
		 	 },1000);
	}

	// 我机后退
	Ship.prototype.back = function(){
		this.x -=6;
		if(this.x<=0){
			this.x = 0;
		}
	};
	// 我机前进
	Ship.prototype.forward = function(){
		this.x +=6;
		if(this.x >= (game.canvas.width - 64)){
			this.x = (game.canvas.width-64);
		}
	};
	// 我机上升
	Ship.prototype.up = function(){
		this.y -=6;
		if(this.y <= 50){
			this.y = 50;
		}
	};
	// 我机下落
	Ship.prototype.down = function(){
		this.y +=6;
		if(this.y >= (game.canvas.height - 120)){
			this.y = game.canvas.height - 120;
		}
	};

	// 我机死亡
	Ship.prototype.die = function(){
		 this.dieCount++;	
		document.getElementById("boom").play();
	};

})()
