new Vue({
	el:'#puz-app',
	data:{
		up:0,
		down:0,
		left:0,
		right:0,
	},
	methods:{
		stylesT: function(){
			return{
				'background-color': 'green',
				width: '300px',
				height: (140-this.up) + 'px'
			};
		},
		stylesL: function(){
			return{
				'background-color': 'green',
				width: (140-this.left) + 'px',
				height: '20px'
			};
		},
		stylesC: function(){
			return{
				'background-color': 'black',
				width: '20px',
				height: '20px'
			};
		},
		stylesR: function(){
			return{
				'background-color': 'green',
				width: (140-this.right) + 'px',
				height: '20px'
			};
		},
		stylesB: function(){
			return{
				'background-color': 'green',
				width: '300px',
				height: (140-this.down) + 'px'
			};
		},
		upclick: function(){
			if (this.up<140){
				this.up+=20;
				this.down+=(-20);
			}
		},
		downclick: function(){
			if (this.down < 140){
				this.down+=20;
				this.up+=(-20);
			}
		},
		leftclick: function(){
			if (this.left < 140){
				this.left+=20;
				this.right+=(-20);
			}
		},
		rightclick: function(){
			if (this.right < 140){
				this.right+=20;
				this.left+=(-20);
			}
		}
	}
});