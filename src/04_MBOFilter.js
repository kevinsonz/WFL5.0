// MBOフィルターのモード切替え

function mboFilter(e){
  const eRow = e['range'].getRow();
  const eColumn = e['range'].getColumn();
  const runFlag = (endCol_MBO === mboCol) && (eRow === 2) && (eColumn === 1);
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
  }
}