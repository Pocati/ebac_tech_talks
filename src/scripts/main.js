AOS.init();

const dataDoEvento = new Date("Aug 30, 2025 15:30:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaOTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    
    const horaEvento = timeStampDoEvento - timeStampAtual

    const diaDoEvento = Math.floor(horaEvento / (1000 * 60 * 60 * 24))
    const horaDoEvento = Math.floor((horaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosDoEvento = Math.floor(horaEvento % (1000 * 60 * 60) / (1000 * 60))
    const segundosDoEvento = Math.floor((horaEvento % 1000 * 60) / 1000)

    document.getElementById('contador').innerHTML = `${diaDoEvento}d ${horaDoEvento}h ${minutosDoEvento}m ${segundosDoEvento}s`

    if (horaDoEvento < 0) {
        clearInterval(contaOTempo)
        document.getElementById('contador').innerHTML = 'O evento expirou'
    }
}, 1000)