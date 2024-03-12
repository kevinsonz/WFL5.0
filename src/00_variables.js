// 変数まとめ

// ファイル・シート
const wflFile = SpreadsheetApp.getActiveSpreadsheet();
const wflSheet = wflFile.getActiveSheet();
const templateSheet = wflFile.getSheetByName('Template');
const mboSheet = wflFile.getSheetByName('MBO');
const gtdSheet = wflFile.getSheetByName('GTD');

// 行
const beginRow_LL = 9;
const endRow_LL = wflSheet.getMaxRows();
const endRow_tpl = templateSheet.getMaxRows();
const beginRow_MBO = 4;
const endRow_MBO = mboSheet.getMaxRows();
const mboRow = 570;
const beginRow_GTD = 3;
const endRow_GTD = gtdSheet.getMaxRows();
const mboRow_DayStart = 208;

// 列(全シート共通)
const endCol = wflSheet.getMaxColumns();
const endCol_MBO = mboSheet.getMaxColumns();
const mboCol = 69;
const mboCol_DataFormula = 47;

// セル
const runCell = 'D3';

// 行列
let llData = [];
let bgData = [];
const tplData = templateSheet.getRange(beginRow_LL,1,endRow_tpl-beginRow_LL+1,endCol).getValues();
const gtdNo = gtdSheet.getRange(beginRow_GTD,1,endRow_GTD,1).getValues();
const gtdData = gtdSheet.getRange(beginRow_GTD,1,endRow_GTD,11).getValues();
const mboData_Day = mboSheet.getRange(mboRow_DayStart,1,366,43).getValues();

// 識別
const typeData = wflSheet.getRange('B2').getValue();
let runFunc = '';
const isLL = typeData === 'LL'
if(isLL){
    runFunc = wflSheet.getRange(runCell).getValue();
}
const okCol = (endCol === 26);
const statusMBO = mboSheet.getRange('A1').getValue();
const statusGTD = gtdSheet.getRange('A1').getValue();
const filterGTD = gtdSheet.getRange('I1').getValue();
