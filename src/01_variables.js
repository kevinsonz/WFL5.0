// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const llSheet = gssFile.getSheetByName('LifeLog');
const templateSheet = gssFile.getSheetByName('template');

// 行
const beginRow = 8;
const endRow = llSheet.getMaxRows();

// 列
const endCol = llSheet.getMaxColumns();

// 行列
let llData = [];
let bgData = [];

// 識別
const typeData = llSheet.getRange('A1').getValue();
let runFunc = '';
const isLL = typeData === 'LL'
if(isLL){
    runFunc = llSheet.getRange('C2').getValue();
}
const okCol = (endCol === 25);