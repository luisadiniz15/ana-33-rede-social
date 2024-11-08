async function quantidadeUsuarios PorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDas Redes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values (dados)

    const data = [
        {
            x: nomeDas Redes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newplot(grafico, data)
}

quantidadeUsuariosPorRede()
