(function(){
	var Background = window.Background = function(){
		this.image = game.res["starfield"];
		this.x = 0;
	};
	Background.prototype.render = function(){
		game.ctx.drawImage(this.image,this.x,0);
		game.ctx.drawImage(this.image,this.x+1369,0);
		game.ctx.drawImage(this.image,this.x,400);
		game.ctx.drawImage(this.image,this.x+1369,400);
	}
	Background.prototype.update = function(){
		//背景向左移动
		this.x--;
		if(this.x<-1369){
			this.x = 0;
		}
	}
})();
