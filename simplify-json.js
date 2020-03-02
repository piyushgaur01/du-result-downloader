const fs = require('fs');

const data = fs.readFileSync('./complete-result.json', {encoding: 'utf-8'});

const jsonData = JSON.parse(data);

const newData = [];

jsonData.forEach(record => {
  newData.push({
    name: record.name,
    roll: record.rollNo,
    OB:   parseInt(record.result[0][0]['TH']) + parseInt(record.result[0][0]['IA']),
    QT:   parseInt(record.result[0][1]['TH']) + parseInt(record.result[0][1]['IA']),
    Eco:  parseInt(record.result[0][2]['TH']) + parseInt(record.result[0][2]['IA']),
    Acc:  parseInt(record.result[0][3]['TH']) + parseInt(record.result[0][3]['IA']),
    Mkt:  parseInt(record.result[0][4]['TH']) + parseInt(record.result[0][4]['IA']),
    Fin:  parseInt(record.result[0][5]['TH']) + parseInt(record.result[0][5]['IA']),
    IT:   parseInt(record.result[0][6]['TH']) + parseInt(record.result[0][6]['IA'])
  })
});

fs.writeFile('./formatted.json', JSON.stringify(newData), () => { console.log('Completed!')});