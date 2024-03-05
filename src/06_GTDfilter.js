// GTDフィルター(On/Off切替え)

function hiddenGTD(e){
  let eRow = 0;
  let eColumn = 0;
  let eFlag = '';
  if(e === 'call'){
    eRow = 1;
    eColumn = 9;
  }else{
    eRow = e['range'].getRow();
    eColumn = e['range'].getColumn();
    eFlag = (e['value'] === '完了' || e['value'] === '中止');
  }
  const runFlug = (e === 'call' || eFlag || ((eRow === 1) && (eColumn === 9))) && (endCol === 11);
  if(runFlug){
    const ckBox = gtdSheet.getRange('I1').getValue();
    let filterGTD = gtdSheet.getFilter();
    if(filterGTD !== null){
        gtdSheet.getFilter().remove();
    }
    if(ckBox){
      const rule = SpreadsheetApp.newFilterCriteria()
      .setHiddenValues(['完了','中止'])
      .build(); //ビルダーを構築
      gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter()
      .setColumnFilterCriteria(9,rule);
    }else{
      gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter();
    }
  }
}