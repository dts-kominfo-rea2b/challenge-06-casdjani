// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let val1 = ""
  let val2 = ""
  let val3 = ""
  let message = []

  fs.readFile(file1, 'utf8', (err, data) =>{
    if (err){console.log(`Error data 1 ${err}`);}
    val1 = JSON.parse(data).message.split(" ")[1]

    fs.readFile(file2, 'utf8', (err, data) =>{
      if (err){console.log(`Error data 2 ${err}`);}
      val2 = JSON.parse(data)[0].message.split(" ")[1]

      fs.readFile(file3, 'utf8', (err, data) =>{
        if (err){console.log(`Error data 3 ${err}`);}
        val3 = JSON.parse(data)[0].data.message.split(" ")[1]

        message.push(val1)
        message.push(val2)
        message.push(val3)

        fnCallback(err, message)

      })
    })
  })

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
