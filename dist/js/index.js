function shuju(t){for(var a=t.shop_data,i=["shop_ico","shop_name","level","main","addr_detail","shop_visit"],o=0;o<5;o++){for(var s=[],l=0;l<i.length;l++)s.push(a[o][i[l]]);var e=$("<dl/>").appendTo($("#storeList")),n=$("<dt/>").appendTo(e),h=($("<img/>").appendTo(n).attr("src",s[0]),$("<dd/>").appendTo(e)),p=$("<p/>").appendTo(h).html("店铺等级："+s[2]),c=($("<a/>").prependTo(p).html(s[1]),$("<p/>").appendTo(h).html("主营："+s[3]),$("<p/>").appendTo(h).html("地址："+s[4]),$("<div/>").appendTo(e));$("<p/>").appendTo(c).html("先行赔付"),$("<p/>").appendTo(c).html("同城帮认证"),$("<p/>").appendTo(c).html("人气："+s[5]+"次浏览"),$("<div/>").appendTo(e).attr("class","access").html("进入店铺")}$("#storeList>dl").mouseover(function(){$(this).children(".access").show()}),$("#storeList>dl").mouseout(function(){$(this).children(".access").hide()})}var mySwiper=new Swiper(".swiper-container",{autoplay:3e3,pagination:".swiper-pagination",paginationType:"bullets",paginationClickable:!0,loop:!0});$("#left>li").click(function(){$(this).next().is(":hidden")?($(this).next().show().siblings(".left-0").hide(),$(".to").hide(),$(this).children().children(".to").show(),$(this).siblings("li").css({opacity:"0.8"}),$(this).css({backgroundColor:"#118855",color:"black",opacity:"1"}),$(this).siblings("li").css({backgroundColor:"black",color:"#fff"})):($(".to").hide(),$(this).next().hide(),$(this).css({backgroundColor:"black",color:"#fff",opacity:"0.8"}))});var baseURL="http://localhost:3003";$.get(baseURL,shuju),$("#paging>li").click(function(){$(this).attr("class","at").siblings("li").removeClass("at"),1==$(".at").html()&&($(".laquo").hide(),$(".raquo").show()),10==$(".at").html()&&($(".raquo").hide(),$(".laquo").show())}),$(".laquo").click(function(){$(".raquo").show(),$(".at").prev().attr("class","at").siblings("li").removeClass("at"),1==$(".at").html()&&$(".laquo").hide()}),$(".raquo").click(function(){$(".laquo").show(),$(".at").next().attr("class","at").siblings("li").removeClass("at"),10==$(".at").html()&&$(".raquo").hide()});