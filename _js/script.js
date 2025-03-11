function insert(num)
{
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
    
}

function clean()
{
    document.getElementById("resultado").innerHTML = "";
}

function back()
{
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular()
{
    var resultado = document.getElementById("resultado").innerHTML;
    if (resultado)

        // Substituir a raiz quadrada (ex: √4 → Math.sqrt(4))
        if (resultado.includes("√")) {
            // Aqui substituímos o símbolo √ por Math.sqrt()
            resultado = resultado.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
        }
    
        // Substituir porcentagens (ex: 50%200 → (50/100)*200)
        resultado = resultado.replace(/(\d+)%(\d+)/g, "($1/100)*$2");
    
        // Substituir potência (ex: 2^3 → Math.pow(2, 3))
        resultado = resultado.replace(/(\d+)\^(\d+)/g, "Math.pow($1, $2)");
    
        // Avaliar a expressão e mostrar o resultado
        if (resultado) {
            document.getElementById("resultado").innerHTML = eval(resultado);
        }
    {
        document.getElementById("resultado").innerHTML = eval(resultado);

        
    }
}




// Barra de espaco

function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}




// Calculo de MMC

function calcularMMC() {
    var resultado = document.getElementById("resultado").innerHTML;

    // Separar a entrada em dois números usando o espaço
    var numeros = resultado.split(' ');

    // Verifica se foram inseridos dois números
    if (numeros.length === 2) {
        var a = parseInt(numeros[0]);
        var b = parseInt(numeros[1]);

        // Função para calcular o MDC (Máximo Divisor Comum)
        function mdc(x, y) {
            while (y != 0) {
                var temp = y;
                y = x % y;
                x = temp;
            }
            return x;
        }

        // Calcular o MMC
        var mmc = Math.abs(a * b) / mdc(a, b);
        document.getElementById("resultado").innerHTML = mmc;
    } else {
        document.getElementById("resultado").innerHTML = "Erro: Insira dois números separados por espaço!";
    }
}








