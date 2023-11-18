// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
const endCol = gssSheet.getMaxColumns();
const formulaCols = [2,3,4,5,14,15,16,17,18,19,20,21,22,23];

// 識別
const typeData = gssSheet.getRange('A1').getValue(); 
const runFunc = gssSheet.getRange('C2').getValue();
const runFlag = typeData === 'LL' && runFunc === '数式';

// 数式リセット
function formulaReset(){
    if(runFlag){
        for(i=0; i<formulaCols.length; i++){
            const llFormula = gssSheet.getRange(beginRow,formulaCols[i]).getFormula();
            gssSheet.getRange(beginRow,formulaCols[i],endRow-beginRow+1,1).setFormula(llFormula);
        } 
    }
    gssSheet.getRange('C2').setValue('');
}