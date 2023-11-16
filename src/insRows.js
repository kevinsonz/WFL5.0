// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
let fomulaCols = [2,3,4,14,15,16,17,18,19,20,21,22,23];

function insRows(){
    for(i=0;i<fomulaCols.length;i++){
        const llFormula = gssSheet.getRange(8,fomulaCols[i]).getFormula();
        gssSheet.getRange(8,fomulaCols[i],endRow-beginRow+1,1).setFormula(llFormula);
    }
}