$(function () {
	"use strict";
	var obj = {
		init: function () {
			this.MainImg();
		},
		
		MainImg : function(){
			$('.skitter-large').skitter({
		animation: 'random',
		controls: false,
		dots:true,
		interval: 5000,
	});
		},

};

obj.init();

});