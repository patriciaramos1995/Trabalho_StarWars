$('.mostrarPessoa').on('click', function() {
	var selecionado = $('#pessoas').val();
	$.ajax({
	url:'http://swapi.co/api/people/'+selecionado,
	
	error: function(erro) {
		alert(erro.responseText, 3000, 'redtext');
	},
	
	success: function(data) {
		var contPessoa = document.querySelector("#conteudoPessoa");
		contPessoa.innerHTML = "";
		contPessoa.innerHTML = "<br/> Nome: " + data.name + "<br/> Altura: " + data.height + "<br/> Ano Nasc.: " + data.birth_year + "<br/> Genero:"+data.gender;
				
	}});
});

$('.mostrarPlaneta').on('click', function() {
	var selecionado = $('#planetas').val();
	$.ajax({
	url:'http://swapi.co/api/planets/'+selecionado,
	
	error: function(erro) {
		alert(erro.responseText, 3000, 'redtext');
	},
	
	success: function(data) {
		var contPlaneta = document.querySelector("#conteudoPlaneta");
		contPlaneta.innerHTML = "";
		contPlaneta.innerHTML = "<br/> Nome: " + data.name + "<br/> Rotacao: " + data.rotation_period + "<br/> Orbita: " + data.orbital_period + "<br/> Populacao:"+data.population;
				
	}});
});

$('.mostrarNave').on('click', function() {
	var selecionado = $('#naves').val();
	$.ajax({
	url:'http://swapi.co/api/starships/'+selecionado,
	
	error: function(erro) {
		alert(erro.responseText, 3000, 'redtext');
	},
	
	success: function(data) {
		var contNave = document.querySelector("#conteudoNave");
		contNave.innerHTML = "";
		contNave.innerHTML = "<br/> Nome: " + data.name + "<br/> Modelo: " + data.model + "<br/> Fabricante: " + data.manufacturer + "<br/> Comprimento:"+data.length+ "<br/> Passageiros:"+data.passengers;
				
	}});
});
