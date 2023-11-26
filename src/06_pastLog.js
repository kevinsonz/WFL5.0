const bkSheet = gssFile.getSheetByName('bkLog');

function bkLog(){
    bkSheet.getRange('A1').setValues(llData);
}