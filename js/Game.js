(function(){
	var Game = window.Game = function(){
		this.f = 0;
		this.score = 0;
		this.init();
		this.enemyArr = [];
		this.shotArr = [];
		this.shipArr = [];
		this.bindEvent();
		this.life = 3;
		
	};
	Game.prototype.init = function(){
		// 获取画布
		this.canvas = document.getElementById("skycanvas");
		this.landcanvas = document.getElementById("landcanvas");
		this.ctx = this.canvas.getContext("2d");
		this.landctx = this.landcanvas.getContext("2d");
		// 创建资源管理器
		this.res = {
			"splash_screen":"images/splash_screen.jpg",
			"foreground":"images/foreground.png",
			"starfield":"images/starfield.jpg",
			"enemy_small":"images/enemy_small.png",
			"enemy_small_special":"images/enemy_small_special.png",
			"enemy_small_2":"images/enemy_small_2.png",
			"enemy_small_2_special":"images/enemy_small_2_special.png",
			"enemy_small_3":"images/enemy_small_3.png",
			"enemy_small_4":"images/enemy_small_4.png",
			"enemy_small_4_special":"images/enemy_small_4_special.png",
			"enemy_artifact":"images/enemy_artifact.png",
			"enemy_artifact_2":"images/enemy_artifact_2.png",
			"command_ship":"images/command_ship.png",
			"ship_center":"images/ship_center.png",
			"ship_death_1":"images/ship_death_1.png",
			"ship_death_2":"images/ship_death_2.png",
			"ship_death_3":"images/ship_death_3.png",
			"ship_death_4":"images/ship_death_4.png",
			"ship_death_5":"images/ship_death_5.png",
			"ship_death_6":"images/ship_death_6.png",
			"ship_death_7":"images/ship_death_7.png",
			"ship_down_1":"images/ship_down_1.png",
			"ship_down_2":"images/ship_down_2.png",
			"ship_down_3":"images/ship_down_3.png",
			"ship_up_1":"images/ship_up_1.png",
			"ship_up_2":"images/ship_up_2.png",
			"ship_up_3":"images/ship_up_3.png",
			"splode_1":"images/splode_1.png",
			"splode_2":"images/splode_2.png",
			"splode_3":"images/splode_3.png",
			"splode_4":"images/splode_4.png",
			"splode_5":"images/splode_5.png",
			"splode_6":"images/splode_6.png",
			"splode_7":"images/splode_7.png"

		};
		var count = 0;
		var length = Object.keys(this.res).length;
		for(var i in this.res){
			var image = new Image();
			image.src = this.res[i];
			this.res[i] = image;
			var self = this;
			image.onload = function(){
				count++;
				self.clear();
				self.ctx.save();
				self.ctx.font = "40px Microsoft Yahei";
				self.ctx.fillStyle = "#009a2f";
				self.ctx.textAlign = "center";
				self.ctx.fillText(`Loading${parseInt((count/length)*100)+"%"}`,self.canvas.width/2,200);
				self.ctx.restore();
				if(count == length){
					self.start();
				}
			}
		}

	};
	// 清屏
	Game.prototype.clear = function(){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.landctx.clearRect(0,0,this.landcanvas.width,this.landcanvas.height);
	};
	// // 按箭头键，移动我机位置
	Game.prototype.bindEvent = function(){
		var self = this;
		$(document).keydown(function(event){
			if(event.keyCode == 37){
				self.scene.ship.back();
			}
			if(event.keyCode == 38){
				self.scene.ship.up();
			}
			if(event.keyCode == 39){
				self.scene.ship.forward();
			}
			if(event.keyCode == 40){
				self.scene.ship.down();
			}
			if(event.keyCode == 32){
				self.shot = new Shot();
				document.getElementById("shot").load();
				document.getElementById("shot").play();
			}

		});
	};

	// 主循环
	Game.prototype.start = function(){
		// this.background = new Background();
		// this.land = new Land();
		// this.ship = new Ship();
		// document.getElementById("loading_music").play();
		// document.getElementById("boss_loop").play();
		this.scene = new Scene();
		var self = this;
		this.timer = setInterval(function(){
			self.f ++;

			self.clear(); 
			// self.background.update();
			// self.background.render();
			// self.land.update();
			// self.land.render();
			
			// self.f%100 == 0 && new Enemy();
			// for(var i = 0 ; i < self.enemyArr.length ; i++){
			// 	self.enemyArr[i].update();
			// 	self.enemyArr[i].render();
			// }

			
			// self.ship.update();
			// self.ship.render(); 

			// if(self.enemyArr.length&&self.shotArr.length){
			// 	for (var i = 0; i < self.shotArr.length; i++) {
			// 		self.shotArr[i].update();
			// 		self.shotArr.length!=0 &&self.shotArr[i].render();
					
			// 	}
				
			// }
			 self.scene.render();
			self.ctx.font = "20px Microsoft Yahei";
			self.ctx.fillText(`剩余生命值：${self.life}`,10,20);
			self.ctx.fillText(`得分：${self.score}`,10,40);
			self.ctx.fillStyle = "#fff";
		},20);
		
	};


})()