// MBOフィルターのモード切替え

function mboFilter(e){
  const eRow = e['range'].getRow();
  const eColumn = e['range'].getColumn();
  const ePosition = e['range'].getRow() === 1 && e['range'].getColumn() === 1;
  const eValue = (e['value'] === '両' || e['value'] === '↑' || e['value'] === '↓');
  const runFlag = (endCol_MBO === mboCol) && (eRow === 2) && (eColumn === 1) && ePosition && eValue;
  let ckBox = mboSheet.getRange('A2').getValue();
  if(runFlag){
    if(ckBox){
      let filterMBO = mboSheet.getFilter();
      if(filterMBO !== null){
        mboSheet.getFilter().remove();
      }
      if(statusMBO === "今"){
        const rule = SpreadsheetApp.newFilterCriteria()
        .setHiddenValues(["Hidden"])
        .build();
        mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter()
        .setColumnFilterCriteria(2,rule);
      }else{
        mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter();
      }
      mboSheet.getRange('A2').setValue(false);
    }

    if(eValue){
      const rule = SpreadsheetApp.newFilterCriteria()
      .setHiddenValues([false])
      .build();
      switch(statusMBO){
        case '両':
          mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter()
          .setColumnFilterCriteria(24,rule);
          break;
        case '↑':
          mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter()
          .setColumnFilterCriteria(25,rule);          
          break;
        case '↓':
          mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter()
          .setColumnFilterCriteria(26,rule);
          break;
        default:
          mboSheet.getRange(beginRow_MBO-1,1,mboRow+1,endCol_MBO).createFilter();
          break;
      }
      mboSheet.getRange('A1').setValue(e['oldValue']);
    }
  }
}