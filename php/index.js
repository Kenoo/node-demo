/**
 * Created by czt on 2018/6/10.
 */

const cprocess = require('child_process');
const path = require('path');
const fs = require('fs');

var fpath =  path.resolve(__dirname, 'test.php');

fs.chmod(fpath, "775", (err)=>{
    if(err){
        return console.log(err);
    }

    cprocess.exec(`php ${fpath}`, (err, stdout, stderr)=>{
        if(err){
            throw err;
        }
        console.log(stdout);
        console.log(stderr);
    })
});