const bkSheet = gssFile.getSheetByName('bkLog');

function bkLog(){
    const endBkRow = bkSheet.getMaxRows();
    const bkPasteRange = bkSheet.getRange(1,1,endRow-beginRow+1,endCol);
    if(endBkRow>1){
        bkSheet.deleteRows(2,endBkRow-1);
    }
    bkSheet.getRange('A1:Y1').clearContent();
    bkSheet.insertRowsAfter(1,endRow-beginRow);
    llSheet.getRange(llDataRange).copyTo(bkPasteRange);
}