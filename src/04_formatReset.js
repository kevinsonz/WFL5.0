function formatReset(){
    const runFlag = (runFunc === '書式') && isLL && okCol;
    if(runFlag){
        gssSheet.getRange(beginRow,1,endRow,endCol).setBackground('white');
        gssSheet.getRange(beginRow,1,endRow,endCol).setFontColor('black');
        doneCheck('Done');
    }
}