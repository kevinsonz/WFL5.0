// MBO予定列のみ表示モード

function hideColMBO(e){
    const ePosition = e['range'].getRow() === 1 && e['range'].getColumn() === 1;
    const eValue = (e['value'] === '閉' || e['value'] === '開');
    const runFlag = ((endCol_MBO === mboCol) && ePosition && eValue);
    if(runFlag){
        const hideCols = [8,12,16,20];
        if(e['value'] === '閉'){
            for(let i=0; i<hideCols.length; i++){
                mboSheet.hideColumns(hideCols[i],3);
            }
        }else if(e['value'] === '開'){
            for(let i=0; i<hideCols.length; i++){
                mboSheet.showColumns(hideCols[i],3);
            }
        }
        mboSheet.getRange('A1').setValue(e['oldValue']);
    }
}