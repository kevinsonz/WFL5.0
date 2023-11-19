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
let llData = [];
let bgData = [];

// 識別
const typeData = gssSheet.getRange('A1').getValue();
let runFunc = '';
const isLL = typeData === 'LL'
if(isLL){
    runFunc = gssSheet.getRange('C2').getValue();
}
const okCol = (endCol === 25);

// その他
let call = '';
let addRows = 0;