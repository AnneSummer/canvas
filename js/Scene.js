(function(){
	var Scene = window.Scene = function(){
		// 当前场景
		this.sceneNumber = 1;
		this.init(1);
		// this.bindEvent();

	}
	Scene.prototype.init = function(number){
		// 初始化静态页面
		switch(number){
			// 登录界面
			case 1:
				$("#begin").css("display","block");
				$("#begin span").mouseenter(function(){
					document.getElementById("open").play();
				});
				document.getElementById("loading_music").play();
				
				break;
			// 游戏界面
			case 2:
				$("#begin").css("display","none");
				this.background = new Background();
				this.land = new Land();
				this.ship = new Ship();
				document.getElementById("level_1_loop").play();
				document.getElementById("level_1_loop").loop = true
				break;
			case 3:
				break;

		}
	};

	Scene.prototype.render = function(){
		switch(this.sceneNumber){
			// 渲染和更新
			case 1:
			    $("#begin").css("display","block");
			    var self = this;
				$("#begin span").mousedown(function() {
					self.sceneNumber = 2;
					self.init(2);
					$("#begin").css("display","none");
				});
				break;
			case 2:
				this.background.update();
                this.background.render();
                this.land.update();
                this.land.render();
				game.f%100 == 0 && new Enemy();
				for(var i = 0 ; i < game.enemyArr.length ; i++){
					game.enemyArr[i].update();
					game.enemyArr[i].render();
				}
				this.ship.update();
				this.ship.render(); 
				if(game.enemyArr.length&&game.shotArr.length){
						for (var i = 0; i < game.shotArr.length; i++) {
							game.shotArr[i].update();
							game.shotArr.length!=0 &&game.shotArr[i].render();
							
						}
					
				}
				break;
			case 3:
				break;
		}
	};


})()