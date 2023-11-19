// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();
const templateSheet = gssFile.getSheetByName('template');

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
const endCol = gssSheet.getMaxColumns();

// 行列
let llData = gssSheet.getRange(beginRow,1,endRow-beginRow+1,endCol).getValues();
let bgData = gssSheet.getRange(beginRow,1,endRow-beginRow+1,endCol).getBackgrounds();

// 識別
const typeData = gssSheet.getRange('A1').getValue();
let runFunc = '';
const isLL = typeData === 'LL'
if(isLL){
    runFunc = gssSheet.getRange('C2').getValue();
}
const okCol = (endCol === 25);