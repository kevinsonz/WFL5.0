// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();
const templateSheet = gssFile.getSheetByName('temp');

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
const endCol = gssSheet.getMaxColumns();
const formulaCols = [2,3,4,5,14,15,16,17,18,19,20,21,22,23];

// 識別
const typeData = gssSheet.getRange('A1').getValue();
let runFunc = '';
if(typeData === 'LL'){
    runFunc = gssSheet.getRange('C2').getValue();
}
const runFlag = (runFunc === '数式');

// 数式リセット
function formulaReset(){
    if(runFlag){
        for(i=0; i<formulaCols.length; i++){
            const llFormula = templateSheet.getRange(beginRow,formulaCols[i]).getFormula();
            gssSheet.getRange(beginRow,formulaCols[i],endRow-beginRow+1,1).setFormula(llFormula);
        }
        gssSheet.getRange('C2').setValue(''); 
    }
}