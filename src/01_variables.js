// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();
const templateSheet = gssFile.getSheetByName('temp');

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
const endCol = gssSheet.getMaxColumns();

// 行列
let llData = gssFile.getRange(beginRow,1,endRow,endCol).getValues();

// 識別
const typeData = gssSheet.getRange('A1').getValue();