// GTDフィルター(On/Off切替え)

function hiddenGTD(e){
    const eRow = e['range'].getRow();
    const eColumn = e['range'].getColumn();
    const runFlug = (eRow === 1) && (eColumn === 9) && (endCol === 11);
    if(runFlug){
      const ckBox = gtdSheet.getRange('I1').getValue();
      let filterGTD = gtdSheet.getFilter();
      if(filterGTD !== null){
          gtdSheet.getFilter().remove();
      }
      if(ckBox === true){
        const rule = SpreadsheetApp.newFilterCriteria()
        .setHiddenValues(['完了','中止'])
        .build();　//ビルダーを構築
        gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter()
        .setColumnFilterCriteria(9,rule);
      }else{
        gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter();
      }
    }
  }