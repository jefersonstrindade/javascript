// script.js

// Função para mostrar o valor na tela
function updateDisplay(value) {
    document.getElementById('display').value = value;
}

// Função para adicionar números e operadores à tela
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Função para adicionar operadores à tela
function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    if (display.value && !['+', '-', '*', '/'].includes(lastChar)) {
        display.value += operator;
    }
}

// Função para limpar a tela
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular o resultado
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '';
    } catch {
        display.value = 'Erro';
    }
}
