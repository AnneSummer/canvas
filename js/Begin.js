(function(){
	var Begin = window.Begin = function(){
		this.image1 = game.res["splash_screen"];
		this.image2 = game.res["title"];
		this.x
	};
	Begin.prototype.render = function(){
		game.ctx.drawImage(this.image1,this.x,0,1000,600);
		game.ctx.drawImage(this.image2,this.x,0,1000,600);
		game.ctx.save();
		game.ctx.fillRect(100, 450, 200, 100);
		game.ctx.fillStyle = "#000";
		game.ctx.restore();
		game.ctx.save();
		game.ctx.textAlign = "center";
		game.ctx.font = "40px/100px Microsoft Yahei";
		game.ctx.fillStyle = "#fff";
		game.ctx.fillText(`开始游戏`,100, 450,);
		game.ctx.restore();
		game.ctx.save();
		game.ctx.font = "20px/30px Microsoft Yahei";
		game.ctx.fillStyle = "#fff";
		game.ctx.fillText(`游戏说明：箭头键控制移动</br>空格键控制开火/射击</br>p暂停游戏`,550, 450);
		game.ctx.restore();
	};
})()