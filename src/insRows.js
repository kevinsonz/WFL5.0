// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
const endCol = gssSheet.getMaxColumns();
const fomulaCols = [2,3,4,14,15,16,17,18,19,20,21,22,23];

// フラグ
const runFlag = gssSheet.getRange('A2').getValue();

// 数式リセット
function insRows(){
    if(runFlag){
        for(i=0; i<fomulaCols.length; i++){
            const llFormula = gssSheet.getRange(beginRow,fomulaCols[i]).getFormula();
            gssSheet.getRange(beginRow,fomulaCols[i],endRow-beginRow+1,1).setFormula(llFormula);
        }
        gssSheet.getRange('A2').setValue(false);
    }
}