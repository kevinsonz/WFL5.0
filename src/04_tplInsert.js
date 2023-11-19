// 行列
const tplEndRow = templateSheet.getMaxRows();
const tplData = templateSheet.getRange(beginRow,1,tplEndRow-beginRow+1,endCol).getValues();

function tplInsert(e){
    const tplNamesSheet = gssFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A:A').getValues();
    /**
    const tplDataCheck = e.value === 
    const tplRangeCheck = e.range
    const tplFlag =  tplDataCheck && tplRangeCheck;
    let tplRows = '';
    if(runFlug){
        for(i=0;i<(tplEndRow-beginRow+1);i++){
            
        }
    }
    */
}