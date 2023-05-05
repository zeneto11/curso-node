const fs = require('fs');

fs.readFile("file copy.txt", (err, data)=>{
    if(err) throw err;
    console.log(data);

    fs.unlink("file copy.txt",(unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log('Arquivo excluído');
    });
})
