(function(){
	var Enemy = window.Enemy = function(){
		// 将所有敌机放入数组
		this.allShip = [game.res["enemy_small"],
						game.res["enemy_small_special"],
						game.res["enemy_small_2"],
						game.res["enemy_small_2_special"],
						game.res["enemy_small_3"],
						game.res["enemy_small_4"],
						game.res["enemy_small_4_special"],
						game.res["enemy_artifact"],
						game.res["enemy_artifact_2"],
						game.res["command_ship"]
						];
		this.boomImages =[
						game.res["splode_1"],
						game.res["splode_2"],
						game.res["splode_3"],
						game.res["splode_4"],
						game.res["splode_5"],
						game.res["splode_6"],
						game.res["splode_7"]
						];
		// this.propimages = [
		// 		game.res["artifact_chard"],
		// 		game.res["gem_image"],
		// 		game.res["gun_image"],
		// 		game.res["shot_image"],
		// 		game.res["speed_image"]
		// ];
		this.enemy = this.allShip[parseInt(this.allShip.length*Math.random())];
		this.x = game.canvas.width;
		this.y = parseInt(Math.random()*420)+50;// [50,470]
		//敌机的宽高
		this.enemyWidth = this.enemy.width;
		this.enemyHeight = this.enemy.height;
		game.enemyArr.push(this);
		this.count = 0;



	
		// this.prop = this.propimages[parseInt(Math.random()*this.propimages.length)];
	
		  
	};
	// 渲染敌机
	Enemy.prototype.render = function(){
		game.ctx.drawImage(this.enemy,this.x,this.y);
		// if(game.f%50==0){
		// 	game.ctx.drawImage(this.prop,this.x+50,this.y+50);
		// }
	};
	// 更新敌机
	Enemy.prototype.update = function(){
		  this.x -=(parseInt(Math.random()*2)+2);
		if(this.x < -64){
			this.goDie();
			// console.log(game.enemyArr);
		}

	};
	// 敌人自杀
	Enemy.prototype.goDie = function(){
		for(var i = 0 ; i < game.enemyArr.length ; i++){
			if(game.enemyArr[i] == this){
				game.enemyArr.splice(i,1);

			}
		}
	};
	Enemy.prototype.boom = function(){
		
		game.ctx.drawImage(this.boomImages[this.count],this.x,this.y);
				document.getElementById("boom").load();
				document.getElementById("boom").play();
	};
})();