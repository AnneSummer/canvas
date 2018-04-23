(function(){
	var Prop = window.Prop = function(){
		this.images = [
				game.res["artifact_chard"],
				game.res["gem_image"],
				game.res["gun_image"],
				game.res["shot_image"],
				game.res["speed_image"]
		];
		this.length1 = parseInt(Math.random()*this.length);
		this.length2 = parseInt(Math.random()*game.enemyArr.length);
	
	};
	Prop.prototype.init = function(){

	};

	Prop.prototype.render = function(){
		if(game.f==500){
			game.ctx.drawImage(this.images[this.length1], game.enemyArr[this.length2].x,game.enemyArr[this.length2].y);
		}
	};
})()