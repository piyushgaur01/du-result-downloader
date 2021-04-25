const fs = require('fs');

const data = fs.readFileSync('./sem3-complete-result.json', { encoding: 'utf-8' });

const jsonData = JSON.parse(data);

const newData = [];

jsonData.forEach(record => {
  let flag = false;
  const data = {
    name: record.name,
    roll: record.rollNo,
    // I: 0,
    // II: 0,
    // III: 0,
  };
  // record?.result[0].forEach((element, index) => {
  //   //data['IA ' + record.result[0][index]['Paper Code'].split(' ')[1]] = parseInt(record.result[0][index]['IA (Obt/Max)'].replace('*', ''));
  //   //data['TH ' + record.result[0][index]['Paper Code'].split(' ')[1]] = parseInt(record.result[0][index]['TH (Obt/Max)'].replace('*', ''));
  //   data[record.result[0][index]['Sem']] += parseInt(record.result[0][index]['IA (Obt/Max)'].replace('*', '').replace('AB', 0))
  //     + parseInt(record.result[0][index]['TH (Obt/Max)'].replace('*', '').replace('AB', 0));
  // });
  
  // failures
  record?.result[0].forEach((element, index) => {
    if (element['Paper Result'] === 'F') {
      data['IA ' + record.result[0][index]['Paper Name']] = (record.result[0][index]['IA (Obt/Max)']);
      data['TH ' + record.result[0][index]['Paper Name']] = (record.result[0][index]['TH (Obt/Max)']);
      flag = true;
    }
    // data[record.result[0][index]['Sem']] += parseInt(record.result[0][index]['IA (Obt/Max)'].replace('*', '').replace('AB', 0))
    //   + parseInt(record.result[0][index]['TH (Obt/Max)'].replace('*', '').replace('AB', 0));
  });
  // data.total = data.I + data.II + data.III;
  if (flag) newData.push(data);
});

fs.writeFile('./result-formatted.json', JSON.stringify(newData, null, 2), () => { console.log('Completed!') });