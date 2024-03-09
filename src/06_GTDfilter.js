// GTDフィルター(On/Off切替え)

function ruleSet(a,b,c){
  let rule1 = [];
  let rule2 = [];
  let rule3 = [];
  rule1 = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(a)
  .build(); //ビルダーを構築
  rule2 = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(b)
  .build(); //ビルダーを構築
  rule3 = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(c)
  .build(); //ビルダーを構築
  gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter()
  .setColumnFilterCriteria(4,rule1)
  .setColumnFilterCriteria(7,rule2)
  .setColumnFilterCriteria(9,rule3);
}

function hiddenGTD(e){
  let eRow = 0;
  let eColumn = 0;
  let eFlag = '';
  const prmCodeW = ['F','L','E','O','Z'];
  const prmCodeF = ['W','L','E','O','Z'];
  const prmCodeL = ['W','F','E','O','Z'];
  const prmCodeE = ['W','F','L'];
  const prmUrgentAndImportant = ['2','3','4','9'];
  const prmUrgent = ['3','4','9'];
  const prmImportant = ['2','9'];
  const prmNormal = ['1','2','3','9'];
  const prmActive = ['完了','中止','保留','メモ'];
  const prmInactive = ['完了','中止','未着','着手'];
  const prmFinished = ['未着','着手','保留','メモ'];

  if(e === 'call'){
    eRow = 1;
    eColumn = 9;
  }else{
    eRow = e['range'].getRow();
    eColumn = e['range'].getColumn();
    eFlag = (e['value'] === '完了' || e['value'] === '中止');
  }
  const runFlug = (e === 'call' || eFlag || ((eRow === 1) && ((eColumn === 4) || (eColumn === 7) || (eColumn === 9)))) && (endCol === 11);
  if(runFlug){
    const filterPRM1 = gtdSheet.getRange('D1').getValue();
    const filterPRM2 = gtdSheet.getRange('G1').getValue();
    const filterPRM3 = gtdSheet.getRange('I1').getValue();
    let filterGTD = gtdSheet.getFilter();
    if(filterGTD !== null){
        gtdSheet.getFilter().remove();
    }

    let ruleSetData1 = [];
    let ruleSetData2 = [];
    let ruleSetData3 = [];
    switch(filterPRM1){
      case 'W':
        ruleSetData1 = prmCodeW;
        break;
      case 'F':
        ruleSetData1 = prmCodeF;
        break;
      case 'L':
        ruleSetData1 = prmCodeL;
        break;
      case 'E':
        ruleSetData1 = prmCodeE;
        break;
      default:
        break;
    }

    switch(filterPRM2){
      case '急重':
        ruleSetData2 = prmUrgentAndImportant;
        break;
      case '急':
        ruleSetData2 = prmUrgent;
        break;
      case '重':
        ruleSetData2 = prmImportant;
        break;
      case '無印':
        ruleSetData2 = prmNormal;
        break;
      default:
        break;
    }

    switch(filterPRM3){
      case '活性':
        ruleSetData3 = prmActive;
        break;
      case '非活':
        ruleSetData3 = prmInactive;
        break;
      case '終了':
        ruleSetData3 = prmFinished;
        break;
      default:
        break;
    }
    ruleSet(ruleSetData1,ruleSetData2,ruleSetData3);
  }
}