import '../../src/sass/index.scss';
import $ from 'jquery';


$(function(){
	var flag=false;
    var num,integralAll,moneyAll;
    
    function count(){
    	//求份数的总和和价格的总和
		integralAll = 0;
		moneyAll = 0;
		$(".num1").each(function(index,element){   //循环所有的class		    
			integralAll += parseInt($(element).text()*$(this).parents(".active").find(".ride").text());    //价格*个数的总和					
		});
		$(".num2").each(function(index,element){
		    moneyAll += parseInt($(element).text()*$(this).parents(".active").find(".ride").text());  //价格*个数的总和
		});

		$(".all1").text(integralAll);
		$(".all2").text(moneyAll);
    }

	//----
	$(".items .text .money i:first-child").on("touchstart",function(){
		num=$(this).next().val();
		if(num<=1){
			num=1;
		}else{
			num--;
		}
		$(this).next().val(num);
		$(this).parent().next().find(".ride").text(num);
	});
	//++++++
	$(".items .text .money i:last-child").on("touchstart",function(){
		num=$(this).prev().val();
		num++;
		$(this).prev().val(num);
		$(this).parent().next().find(".ride").text(num);
	});
    //选择
	$(".items>i").on("touchstart",function(){
		$(this).parent().toggleClass("active");
		if($(this).parent().hasClass("active")){
			$(this).parent().find(".money-p").hide();
			$(this).parent().find(".money-p-b").show();	
		}else{
			$(this).parent().find(".money-p").show();
			$(this).parent().find(".money-p-b").hide();
		}
		//单选全部为全选
        if($(".shop-list").children().length==$(".shop-list").children(".active").length){
        	$(".shop-all .left p").addClass("on");
        }else{
        	$(".shop-all .left p").removeClass("on");
        }
		count();
	});
	
	$(".shop-all .left p").on("touchstart",function(){
		$(this).toggleClass("on");
		if($(this).hasClass("on")){
			$(".items").addClass("active");

			$(".money-p").hide();
			$(".money-p-b").show();	
		}else{
			$(".items").removeClass("active");

			$(".money-p").show();
			$(".money-p-b").hide();
		}
		count();
	});	

	//点击删除
	$(".items del").on("click",function(){
		$(this).parent().remove();
		count();
	});	

	//失效产品删除
	$(".lose-efficacy .t p").on("click",function(){
		$(this).parent().next().find(".list").remove();
	});	

})
