// GTDフィルター(On/Off切替え)

// 流用：ルール・フィルター設定
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

// メイン：フィルター隠す機能
function hiddenGTD(e){
  // 変数（イベントからのインプット用）
  let eRow = 0;
  let eColumn = 0;
  let eFlag = '';

  // フィルター分岐の元ネタ
  const prmCodeW = ['F','L','E','O','Z'];
  const prmCodeF = ['W','L','E','O','Z'];
  const prmCodeL = ['W','F','E','O','Z'];
  const prmCodeE = ['W','F','L'];
  const prmUrgentAndImportant = ['2','3','4','9'];
  const prmUrgent = ['3','4','9'];
  const prmImportant = ['2','4','9'];
  const prmNormal = ['1','2','3','9'];
  const prmActive = ['完了','中止','保留','メモ'];
  const prmInactive = ['完了','中止','未着','着手'];
  const prmFinished = ['未着','着手','保留','メモ'];

  // フィルター基準値（GSSから取得）
  const filterPRM1 = gtdSheet.getRange('D1').getValue();
  const filterPRM2 = gtdSheet.getRange('G1').getValue();
  const filterPRM3 = gtdSheet.getRange('I1').getValue();

  // フィルター設定値の枠（二次元配列）
  let ruleSetData1 = [];
  let ruleSetData2 = [];
  let ruleSetData3 = [];

  // パラメタによる場合分け（WFLコード）
  switch(filterPRM1){
    case 'W':
      ruleSetData1 = prmCodeW;
      eFlag = prmCodeW.includes(e['value']);
      break;
    case 'F':
      ruleSetData1 = prmCodeF;
      eFlag = prmCodeF.includes(e['value']);
      break;
    case 'L':
      ruleSetData1 = prmCodeL;
      eFlag = prmCodeL.includes(e['value']);
      break;
    case 'E':
      ruleSetData1 = prmCodeE;
      eFlag = prmCodeE.includes(e['value']);
      break;
    default:
      break;
  }

  // パラメタによる場合分け（急重）
    switch(filterPRM2){
    case '急重':
      ruleSetData2 = prmUrgentAndImportant;
      eFlag = prmUrgentAndImportant.includes(e['value']);
      break;
    case '急':
      ruleSetData2 = prmUrgent;
      eFlag = prmUrgent.includes(e['value']);
      break;
    case '重':
      ruleSetData2 = prmImportant;
      eFlag = prmImportant.includes(e['value']);
      break;
    case '無印':
      ruleSetData2 = prmNormal;
      eFlag = prmNormal.includes(e['value']);
      break;
    default:
      break;
  }

  // パラメタによる場合分け（状態）
  switch(filterPRM3){
    case '活性':
      ruleSetData3 = prmActive;
      eFlag = prmActive.includes(e['value']);
      break;
    case '非活':
      ruleSetData3 = prmInactive;
      eFlag = prmInactive.includes(e['value']);
      break;
    case '終了':
      ruleSetData3 = prmFinished;
      eFlag = prmFinished.includes(e['value']);
      break;
    default:
      break;
  }

  // フィルター処理実行
  if(e === 'call'){
    eRow = 1;
    eColumn = 9;
  }else{
    eRow = e['range'].getRow();
    eColumn = e['range'].getColumn();
  }
  const runFlug = (e === 'call' || eFlag || ((eRow === 1) && ((eColumn === 4) || (eColumn === 7) || (eColumn === 9)))) && (endCol === 11);
  if(runFlug){
    let filterGTD = gtdSheet.getFilter();
    if(filterGTD !== null){
        gtdSheet.getFilter().remove();
    }
    ruleSet(ruleSetData1,ruleSetData2,ruleSetData3);
  }
}