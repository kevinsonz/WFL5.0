function formatReset(call){
    const runFlag = ((runFunc === '書式') || (call === 'call')) && isLL && okCol;
    if(runFlag){
        gssSheet.getRange(beginRow,1,endRow,endCol).setBackground('white');
        gssSheet.getRange(beginRow,1,endRow,endCol).setFontColor('black');
    }
}