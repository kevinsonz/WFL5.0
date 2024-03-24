// アゲサゲフィルターに使う関数
function filterAgeSage(colA,colB,ruleA,ruleB){
  mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter()
  .setColumnFilterCriteria(colA,ruleA)
  .setColumnFilterCriteria(colB,ruleB);
}

// MBOフィルターのモード切替え
function mboFilter(e){
  const ePosition1 = e['range'].getRow() === 2 && e['range'].getColumn() === 1;
  const ePosition2 = e['range'].getRow() === 1 && e['range'].getColumn() === 1;
  const eValue1 = (statusMBO === '全' || statusMBO === '今') && e['value'] === 'TRUE';
  const eValue2 = (e['value'] === '両' || e['value'] === '↑' || e['value'] === '↓');
  const runFlag = (endCol_MBO === mboCol) && (ePosition1 || ePosition2);
  if(runFlag && (eValue1 || eValue2)){
    let filterMBO = mboSheet.getFilter();
    if(filterMBO !== null){
      mboSheet.getFilter().remove();
    }
    let rule = SpreadsheetApp.newFilterCriteria()
          .setHiddenValues([])
          .build();
    if(statusMBO === "今" || e['oldValue'] === '今'){
        rule = SpreadsheetApp.newFilterCriteria()
          .setHiddenValues(["Hidden"])
          .build();
    }
    if(eValue1){
      mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter()
        .setColumnFilterCriteria(2,rule);
      mboSheet.getRange('A2').setValue(false);
    }
    if(eValue2){
      const rule2 = SpreadsheetApp.newFilterCriteria()
        .setHiddenValues(["false"])
        .build();
      switch(e['value']){
        case '両':
          filterAgeSage(2,24,rule,rule2);
          break;
        case '↑':
          filterAgeSage(2,25,rule,rule2);
          break;
        case '↓':
          filterAgeSage(2,26,rule,rule2);
          break;
        default:
          mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter();
          break;
      }
      mboSheet.getRange('A1').setValue(e['oldValue']);
    }
  }
}