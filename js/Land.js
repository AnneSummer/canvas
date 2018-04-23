(function(){
	var Land = window.Land = function(){
		this.landimage = game.res["foreground"];
		this.x = 0;
	};
	Land.prototype.render = function(){
		game.landctx.drawImage(this.landimage,this.x,0);
		game.landctx.drawImage(this.landimage,this.x+1018,0);

	}
	Land.prototype.update = function(){
		//背景向左移动
		this.x--;
		if(this.x<-1018){
			this.x = 0;
		}
	}
})();