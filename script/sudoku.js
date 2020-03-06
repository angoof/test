const input = '060800500005000367370065809609002100001489200000306900050000400010547003096038051'

let output = ''


const table = document.createElement('TABLE')

document.getElementById('sudoku').appendChild(table)

for (let i = 0; i < 9; i++) {
    const tr = document.createElement('TR')

    table.appendChild(tr)


    for(let j = 0; j < 9; j++){
        const td = document.createElement('TD')

        tr.appendChild(td)
        
        const value = input[i*9+j]

        const node = value === '0' ? document.createElement('INPUT') : document.createTextNode(value)
        
        td.appendChild(node)
        }
}



console.log(output)

// document.getElementById('sudoku').innerHTML = output





