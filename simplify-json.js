const fs = require('fs');

const data = fs.readFileSync('./sem2-complete-result.json', {encoding: 'utf-8'});

const jsonData = JSON.parse(data);

const newData = [];

jsonData.forEach(record => {
  newData.push({
    name: record.name,
    roll: record.rollNo,
    OB:   parseInt(record.result[0][0]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][0]['IA (Obt/Max)']),
    QT:   parseInt(record.result[0][1]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][1]['IA (Obt/Max)']),
    Eco:  parseInt(record.result[0][2]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][2]['IA (Obt/Max)']),
    Acc:  parseInt(record.result[0][3]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][3]['IA (Obt/Max)']),
    Mkt:  parseInt(record.result[0][4]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][4]['IA (Obt/Max)']),
    Fin:  parseInt(record.result[0][5]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][5]['IA (Obt/Max)']),
    IT:   parseInt(record.result[0][6]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][6]['IA (Obt/Max)']),
    HRM:  parseInt(record.result[0][7]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][7]['IA (Obt/Max)']),
    OM:   parseInt(record.result[0][8]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][8]['IA (Obt/Max)']),
    EEB:  parseInt(record.result[0][9]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][9]['IA (Obt/Max)']),
    SFM:  parseInt(record.result[0][10]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][10]['IA (Obt/Max)']),
    MR:   parseInt(record.result[0][11]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][11]['IA (Obt/Max)']),
    BCM:  parseInt(record.result[0][12]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][12]['IA (Obt/Max)']),
    DIS:  parseInt(record.result[0][13]['TH (Obt/Max)'].replace('*', '')) + parseInt(record.result[0][13]['IA (Obt/Max)']),
  })
});

fs.writeFile('./sem2-formatted.json', JSON.stringify(newData, null, 2), () => { console.log('Completed!')});