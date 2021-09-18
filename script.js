class Produto {


    constructor() {

        this.id = 1;
        this.arrayLocaisTrabalho = [];


    }

    salvar() {

        let produto = this.lerDados();




        this.listaTabela();

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayLocaisTrabalho.length; i++) {
            let tr = tbody.inserRow();

            let td_predio = tr.insertCell();
            let td_localDeTrabalho = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_predio.innerText = this.arrayLocaisTrabalho[i].predio;
            td_localDetrabalho.innerText = this.arrayLocaisTrabalho[i].localDeTrabalho;
            td_acoes.innerText = this.arrayLocaisTrabalho[i].acoes;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'pedit.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'Delete.png';

            td_acao.appendChild(imgEdit);
            td_acao.appendChild(imgDelete);

        }



    }

    adicionar(produto) {
        this.arryLocaisTrabalho.push(produto);
        this.id++;


    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomePredio = document.getElementById('predio').value;
        produto.nomeLocal = document.getElementById('local').value;


        return produto


    }


}

var produto = new Produto();