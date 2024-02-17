// 変数まとめ

// ファイル・シート
const wflFile = SpreadsheetApp.getActiveSpreadsheet();
const wflSheet = wflFile.getActiveSheet();
const templateSheet = wflFile.getSheetByName('Template');

// 行
const beginRow_LL = 9;
const endRow_LL = wflSheet.getMaxRows();
const endRow_tpl = templateSheet.getMaxRows();

// 列
const endCol = wflSheet.getMaxColumns();

// セル
const runCell = 'D3';

// 行列
let llData = [];
let bgData = [];
const tplData = templateSheet.getRange(beginRow_LL,1,endRow_tpl-beginRow_LL+1,endCol).getValues();

// 識別
const typeData = wflSheet.getRange('B2').getValue();
let runFunc = '';
const isLL = typeData === 'LL'
if(isLL){
    runFunc = wflSheet.getRange(runCell).getValue();
}
const okCol = (endCol === 26);