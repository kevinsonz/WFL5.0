// GTDフィルター(On/Off切替え)

function ruleSet(n,a){
  rule = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(a)
  .build(); //ビルダーを構築
  gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter()
  .setColumnFilterCriteria(n,rule);
}

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
    const filterPRM = gtdSheet.getRange('I1').getValue();
    let filterGTD = gtdSheet.getFilter();
    if(filterGTD !== null){
        gtdSheet.getFilter().remove();
    }
    let rule = [];
    switch(filterPRM){
      case '活性':
        ruleSet(9,['完了','中止','保留','メモ']);
        break;
      case '非活':
        ruleSet(9,['完了','中止','未着','着手']);
        break;
      case '終了':
        ruleSet(9,['未着','着手','保留','メモ']);
        break;
      default:
        gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter();
        break;
    }
  }
}