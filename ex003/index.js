
function calcularTempoRestante(dia, mes, ano) {
    const futureDate = new Date(ano, mes-1, dia)
    const now = new Date()

    const restante = futureDate - now
    const diffSeconds = Math.floor(restante / 1000);
    const days = Math.floor(diffSeconds / 86400);
    const hours = Math.floor((diffSeconds % 86400) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;

    return `${days}d ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
}


    function atualizarTemporizador(dia, mes, ano) {
        setInterval(() => console.log(calcularTempoRestante(dia, mes, ano)), 1000)
    }

    atualizarTemporizador(1,1,2026)