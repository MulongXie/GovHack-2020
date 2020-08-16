const myPlot = document.getElementById('chart-board');

let labels = ['Health', 'Housing', 'Transport', 'Food', 'Entertainment', 'Education', 'Other']
let values = [5, 25, 5, 30, 10, 10, 5]
let programs = [
    ['H1', 'H2'],
    ['Ho1', 'Ho2'],
    ['Trans1', 'Trans2'],
    ['Food1', 'Food2'],
    ['Ent1', 'Ent2'],
    ['ANU-Computer Science', 'UC-Computer Science'],
    []
]
let links = [
    [],
    [],
    [],
    [],
    [],
    ['https://www.anu.edu.au/', 'https://www.canberra.edu.au/']
]

var texts = []

for(let i = 0; i < labels.length; i++){
    let text = "<b>" + labels[i] + "</b><br>"
    for (let j = 0; j < programs[i].length; j++) {
        text += "<br>" + programs[i][j]
    }
    texts.push(text);
}

console.log(texts)

var data = [{
    values: values,
    labels: labels,
    type: 'pie',
    text: texts,
    hovertemplate: "%{text}<extra></extra>"
}];

var layout = {
    height: 800,
    width: 800
};

Plotly.newPlot('chart-board', data, layout);

myPlot.on('plotly_click',function (data) {
    $('#modal-program').modal('toggle')
    let label = data.points[0].label
    let index = labels.indexOf(label)
    let program = programs[index]
    let link = links[index]

    let content = "<h3>" + label + "</h3>"
    for(let i = 0; i < program.length; i++){
        content += '<br><a href="' + link[i] + '">'
            + program[i] + '</a>'
    }

    $("#program-details").html(content)
})
