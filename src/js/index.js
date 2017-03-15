var mySwiper = new Swiper('.swiper-container',{
	autoplay: 3000,
	pagination : '.swiper-pagination',
	paginationType : 'bullets',
	paginationClickable :true,
	loop : true,
})
$("#left>li").click(function() {
	if ($(this).next().is(':hidden')) {
		$(this).next().show().siblings('.left-0').hide();
		$(".to").hide();
		$(this).children().children(".to").show();
		$(this).siblings("li").css({opacity: "0.8"});
		$(this).css({backgroundColor:"#118855",color:"black",opacity: "1"});
		$(this).siblings('li').css({backgroundColor:"black",color:"#fff"});
	}else{
		$(".to").hide();
		$(this).next().hide();
		$(this).css({backgroundColor:"black",color:"#fff",opacity: "0.8"});
	}
})


var baseURL = "http://localhost:3003"

$.get(baseURL,shuju);
function shuju(data2){
	var data = data2["shop_data"];
	var arr = ["shop_ico","shop_name","level","main","addr_detail","shop_visit"];
	for(var i = 0; i < 5; i++){
		var arr1 = [];
		for(var j = 0; j < arr.length; j++){
			arr1.push(data[i][arr[j]])	
		}
		var dl = $("<dl/>").appendTo($("#storeList"));
		var dt = $("<dt/>").appendTo(dl);
		var img = $("<img/>").appendTo(dt).attr("src",arr1[0]);
		var dd = $("<dd/>").appendTo(dl);
		var p1 = $("<p/>").appendTo(dd).html("店铺等级："+arr1[2]);
		var a1 = $("<a/>").prependTo(p1).html(arr1[1]);
		var p2 = $("<p/>").appendTo(dd).html("主营："+arr1[3]);
		var p3 = $("<p/>").appendTo(dd).html("地址："+arr1[4]);
		var div2 = $("<div/>").appendTo(dl);
		var p4 = $("<p/>").appendTo(div2).html("先行赔付");
		var p5 = $("<p/>").appendTo(div2).html("同城帮认证");
		var p6 = $("<p/>").appendTo(div2).html("人气："+arr1[5]+"次浏览");
		var div3 = $("<div/>").appendTo(dl).attr("class","access").html("进入店铺");
	}
	$("#storeList>dl").mouseover(function(){
		$(this).children(".access").show();
	})
	$("#storeList>dl").mouseout(function(){
		$(this).children(".access").hide();
	})
}


$("#paging>li").click(function(){
	$(this).attr("class","at").siblings("li").removeClass("at");
	if($(".at").html() == 1){
		$(".laquo").hide();
		$(".raquo").show();
	}
	if($(".at").html() == 10){
		$(".raquo").hide();
		$(".laquo").show();
	}
})
$(".laquo").click(function(){
	$(".raquo").show();
	$(".at").prev().attr("class","at").siblings("li").removeClass("at");
	if($(".at").html() == 1){
		$(".laquo").hide();
	}
})
$(".raquo").click(function(){
	$(".laquo").show();
	$(".at").next().attr("class","at").siblings("li").removeClass("at");
	if($(".at").html() == 10){
		$(".raquo").hide();
	}
})
