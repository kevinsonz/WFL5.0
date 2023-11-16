// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列

function insRows(){
    const llFormula1 = gssSheet.getRange('B8:D8').getFormula();
    gssSheet.getRange('B8:D'+endRow).setFormula(llFormula1);
}