const { createApp } = Vue

createApp({
    data() { 
        return {
            display: '0',
            numeroAtual: null,
            numeroAnterior: null,
            operador: null
        }
    },
    
    methods: {
        lidarBotao(botao) {
            switch (botao) {
                case "*":
                case "-":
                case "+":
                case "/":
                    this.lidarOperador(botao)
                    break
                case ".":
                    this.lidarDecimal()
                    break
                case "=":
                    this.lidarIgual()
                    break
                case "AC":
                    this.lidarClear()
                    break
                default:
                    this.lidarNumero(botao)
                    break;
            }
        },

        lidarOperador(botao) {
            this.numeroAnterior = this.display; //Armazena o número anterior ao operador
            this.operador = botao; //Armazena o operador para cálculo futuro
            this.display = '0' //Exibe para o usuário o "0" para que ele insira o próximo número a passar pela operção
        },

        lidarDecimal() {
            if (!this.display.includes(".")) { //Confere se já há . no número do display
                this.display += "." //Insere o . no número do display o tornando decimal
            }
        },

        lidarIgual() {
            this.numeroAtual = this.display;
            switch (this.operador) { //Executa as operações com base no que foi inserido anteriormente
                case "+":
                    this.display = Number(this.numeroAnterior) + Number(this.numeroAtual);
                    break;
                case "-":
                    this.display = Number(this.numeroAnterior) - Number(this.numeroAtual);
                    break;
                case "*":
                    this.display = Number(this.numeroAnterior) * Number(this.numeroAtual);
                    break;
                case "/":
                    this.display = Number(this.numeroAnterior) / Number(this.numeroAtual);
                    break;
            }
        },

        lidarClear() { //Retorna os valores das variáveis para seu estado original
            this.display = '0';
            this.numeroAnterior = null;
            this.numeroAtual = null;
            this.operador = null;
        },

        lidarNumero(botao) {
            if (this.display === '0') { //Confere se display apresenta o número 0
                this.display = botao; //Insere o número selecionado
            } else {
                this.display += botao; //Agrega o número já existente com a próxima casa
            }
        }
    }
}).mount("#app")