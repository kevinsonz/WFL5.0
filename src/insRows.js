// ファイル・シート
const gssFile = SpreadsheetApp.getActiveSpreadsheet();
const gssSheet = gssFile.getActiveSheet();

// 行
const beginRow = 8;
const endRow = gssSheet.getMaxRows();

// 列
const endCol = gssSheet.getMaxColumns();
const fomulaCols = [2,3,4,14,15,16,17,18,19,20,21,22,23];

// 行列
const llMatrix = gssSheet.getRange(8,1,endRow,endCol).getValues();

// 空白チェック
let blankCheck = false;
for(i=0; i<endCol; i++){
    if(llMatrix[i][1]=''){
        blankCheck = true;
        break;
    }
}

// 数式リセット
function insRows(){
    if(blankCheck){
        for(i=0; i<fomulaCols.length; i++){
            const llFormula = gssSheet.getRange(8,fomulaCols[i]).getFormula();
            gssSheet.getRange(8,fomulaCols[i],endRow-beginRow+1,1).setFormula(llFormula);
        }
    }
}