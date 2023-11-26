const bkSheet = gssFile.getSheetByName('bkLog');

function bkLog(){
    const endBkRow = bkSheet.getMaxRows();
    bkSheet.deleteRows(2,endBkRow-1);
    bkSheet.getRange('A1:Y1').clearContent();
    // llSheet.getRange(llDataRange).copyTo(bkSheet);
}