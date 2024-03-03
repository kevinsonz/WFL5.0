// MBOフィルターのモード切替え

function mboFilter(e){
    const eRow = e['range'].getRow();
    const eColumn = e['range'].getColumn();
      const runFlag = (endCol_MBO === mboCol) && (e['value'] === true) && ((eRow === 2) && (eColumn === 1));
      let ckBox = mboSheet.getRange('A2').getValue();
      if(runFlag){
        let filterMBO = mboSheet.getFilter();
        if(filterMBO !== null){
            mboSheet.getFilter().remove();
        }
        if(statusMBO === '今' && ckBox === true){
          const rule = SpreadsheetApp.newFilterCriteria()
          .setHiddenValue('Hidden')
          .build();
          mboSheet.getRange(beginRow_MBO-1,1,mboRow-2,52).createFilter()
          .setColumnFilterCriteria(2,rule);
        }else{
          mboSheet.getRange(beginRow_MBO-1,1,mboRow-2,52).createFilter();
        }
        mboSheet.getRange('A2').setValue(false);
      }
      const logSheet = wflFile.getSheetByName('Log');
      logSheet.clear();
      logSheet.getRange(1,1).setValue("e['value']");
      logSheet.getRange(2,1).setValue("eRow");
      logSheet.getRange(3,1).setValue("eColumn");
      logSheet.getRange(4,1).setValue("statusMBO");
      logSheet.getRange(5,1).setValue("ckBox");
      logSheet.getRange(6,1).setValue("endCol_MBO");
      logSheet.getRange(1,2).setValue(e['value']);
      logSheet.getRange(2,2).setValue(eRow);
      logSheet.getRange(3,2).setValue(eColumn);
      logSheet.getRange(4,2).setValue(statusMBO);
      logSheet.getRange(5,2).setValue(ckBox);
      logSheet.getRange(6,2).setValue(endCol_MBO);
  }