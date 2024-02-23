// 変数まとめ

// ファイル・シート
const wflFile = SpreadsheetApp.getActiveSpreadsheet();
const wflSheet = wflFile.getActiveSheet();
const templateSheet = wflFile.getSheetByName('Template');
const gtdSheet = wflFile.getSheetByName('GTD');

// 行
const beginRow_LL = 9;
const endRow_LL = wflSheet.getMaxRows();
const endRow_tpl = templateSheet.getMaxRows();
const beginRow_GTD = 2;
const endRow_GTD = gtdSheet.getMaxRows();

// 列(全シート共通)
const endCol = wflSheet.getMaxColumns();

// セル
const runCell = 'D3';

// 行列
let llData = [];
let bgData = [];
const tplData = templateSheet.getRange(beginRow_LL,1,endRow_tpl-beginRow_LL+1,endCol).getValues();
const gtdNo = gtdSheet.getRange(beginRow_GTD,1,endRow_GTD,1).getValues();
const gtdData = gtdSheet.getRange(beginRow_GTD,1,endRow_GTD,11).getValues();

// 識別
const typeData = wflSheet.getRange('B2').getValue();
let runFunc = '';
const isLL = typeData === 'LL'
if(isLL){
    runFunc = wflSheet.getRange(runCell).getValue();
}
const okCol = (endCol === 26);
const statusGTD = gtdSheet.getRange('A1').getValue();