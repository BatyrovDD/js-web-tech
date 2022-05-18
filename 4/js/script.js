$(function(){
		$( "#accordion" ).accordion({
		collapsible: true,
		active: false
		});
		

	});
		
	
$(function(){
	$("#open").button().click(function(){
		$('#dialog').dialog("open");
		$( "#result" ).val(6000);
	})
	$('#dialog').dialog({
	autoOpen: false,
	buttons:{
			Оформить: function (event, ui) {
					$( "#confirm" ).dialog("open");
				},
			Закрыть: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});

$("#slider").slider({
	range: "min",
	value: 0,
	min: 1,
	max: 32,
	step: 1,
	slide: function(event, ui) {
		$("#weight").val($("#slider").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#weight").val($("#slider").slider("option", "value"));
	}
});
$("#weight").val($("#slider").slider("option", "value"));

$( "#date" ).datepicker({
	dateFormat: "dd.mm.yy"
	});

$("#tip").tooltip();

var availableTags = [
		"Уфа",
		"Москва",
		"Санкт-Петербург",
		"Челябинск",
		"Нижний-Новгород",
		"Смоленск",
		"Сочи",
		"Краснодар",
		"Учалы",
		"Самара",
		];
		$( "#town" ).autocomplete({
		source: availableTags
		});

	$('#confirm').dialog({

	autoOpen: false,
	buttons:{
			Подтвердить: function (event, ui) {
				$( "#succ" ).dialog("open");
				$( "#dialog" ).dialog("close")
				$(this).dialog('close');
				},
			Отмена: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});

$('#succ').dialog({
	autoOpen: false,
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});
}) 


