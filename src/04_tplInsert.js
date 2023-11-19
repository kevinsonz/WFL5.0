// 行列
const tplEndRow = templateSheet.getMaxRows();
const tplData = templateSheet.getRange(beginRow,1,tplEndRow-beginRow+1,endCol).getValues();

function tplInsert(e){
    const tplNamesSheet = gssFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A1:A').getValues().flat();
    const tplDataCheck = tplNames.includes(e.Value);
    const runFlag =  tplDataCheck && typeData === 'LL';
    let tplTargetData = [];
    if(runFlag){
        for(i=0;i<(tplEndRow-beginRow+1);i++){
            tplTargetData.push(tplData[i]);
        }
    }
}