// 行列
const tplEndRow = templateSheet.getMaxRows();
const tplData = templateSheet.getRange(beginRow,1,tplEndRow-beginRow+1,endCol).getValues();

function tplInsert(e){
    const tplNamesSheet = gssFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A1:A').getValues().flat();
    const tplDataCheck = tplNames.includes(e.value);
    const runFlag =  tplDataCheck && typeData === 'LL';
    let tplTargetData = [];
    if(runFlag){
        let tplRows = 0;
        for(let i=0;i<(tplEndRow-beginRow+1);i++){
            if(tplData[i][12]===e.value){
                tplTargetData.push(tplData[i]);
                tplRows = tplRows + 1;
            }
        }
        let insFlagRow = 0;
        for(let i=0;i<(endRow-beginRow+1);i++){
            if(llData[i][12]===e.value){
                gssSheet.insertRowsAfter(beginRow+i,tplRows);
                gssSheet.getRange(beginRow+i+1,1,tplRows,25).setValues(tplTargetData);
                insFlagRow = (beginRow+i);
            }
        }
        gssSheet.getRange(insFlagRow,13,tplRows+1,1).setValue('');
    }
}