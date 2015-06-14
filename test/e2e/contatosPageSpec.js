
var ContatosPage = new require('./pages/contatosPage');

describe('Pagina Principal',function(){

	var pagina = new ContatosPage();

	beforeEach(function(){
		pagina.visitar();
	});

	it('Deve estar logado',function(){
		pagina.obterUsuarioLogado().then(function(texto) {
			expect(texto.trim().length).toBeGreaterThan(0);
		});
	});

	it('Deve remover um contato',function(){
		var totalAntes = pagina.obterTotalDeItensDaLista();

		pagina.removePrimeiroItemDaLista();

		var totalDepois = pagina.obterTotalDeItensDaLista()
		expect(totalDepois).toBeLessThan(totalAntes);
	});
});