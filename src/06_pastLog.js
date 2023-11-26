const bkSheet = gssFile.getSheetByName('bkLog');

function bkLog(){
    const endBkRow = bkSheet.getMaxRows();
    bkSheet.deleteRows(2,endBkRow-1);
    // llSheet.getRange(llDataRange).copyTo(bkSheet);
}