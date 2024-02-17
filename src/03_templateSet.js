// テンプレート挿入

// 行列
const tplEndRow = templateSheet.getMaxRows();
const tplData = templateSheet.getRange(beginRow_LL,1,tplEndRow-beginRow_LL+1,endCol).getValues();

function tplInsert(e){
    llData = wflSheet.getRange(beginRow_LL,1,endRow-beginRow_LL+1,endCol).getValues();
    const tplNamesSheet = wflFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A1:A').getValues().flat();
    const tplDataCheck = tplNames.includes(e.value);
    const runFlag =  tplDataCheck && typeData === 'LL';
    let tplTargetData = [];
    if(runFlag){
        let tplRows = 0;
        for(let i=0;i<(tplEndRow-beginRow_LL+1);i++){
            if(tplData[i][13]===e.value){
                tplTargetData.push(tplData[i]);
                tplRows = tplRows + 1;
            }
        }
        let insFlagRow = 0;
        for(let i=0;i<(endRow-beginRow_LL+1);i++){
            if(llData[i][13]===e.value){
                wflSheet.insertRowsAfter(beginRow_LL+i,tplRows);
                wflSheet.getRange(beginRow_LL+i+1,1,tplRows,26).setValues(tplTargetData);
                insFlagRow = (beginRow_LL+i);
            }
        }
        wflSheet.getRange(insFlagRow,14,tplRows+1,1).setValue('');
        formulaReset('call',tplRows);
        formatReset('call',tplRows);
    }
}