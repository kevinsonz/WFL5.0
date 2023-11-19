// 行列
const tplEndRow = templateSheet.getMaxRows();
const tplData = templateSheet.getRange(beginRow,1,tplEndRow-beginRow+1,endCol).getValues();

function tplInsert(e){
    // 'tpl_A' → e.value
    const tplNamesSheet = gssFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A1:A').getValues().flat();
    const tplDataCheck = tplNames.includes('tpl_A');
    const runFlag =  tplDataCheck && typeData === 'LL';
    let tplTargetData = [];
    if(runFlag){
        let tplRows = 0;
        for(let i=0;i<(tplEndRow-beginRow+1);i++){
            if(tplData[i][12]==='tpl_A'){
                tplTargetData.push(tplData[i]);
                tplRows = tplRows + 1;
            }
        }
        let insFlagRow = beginRow;
        for(let i=0;i<(endRow-beginRow+1);i++){
            if(llData[i][12]==='tpl_A'){
                gssSheet.insertRowsAfter(beginRow+i,tplRows);
                gssSheet.getRange(beginRow+i+1,1,tplRows,25).setValues(tplTargetData);
                insFlagRow = insFlagRow+1;
            }
        }
        gssSheet.getRange(insFlagRow,13,tplRows+1,1).setValues('');
    }
}