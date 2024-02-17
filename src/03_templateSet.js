// テンプレート挿入

function tplInsert(e){
    llData = wflSheet.getRange(beginRow_LL,1,endRow_LL-beginRow_LL+1,endCol).getValues();
    const tplNamesSheet = wflFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A1:A').getValues().flat();
    const tplDataCheck = tplNames.includes(e.value);
    const runFlag =  tplDataCheck && typeData === 'LL';
    let tplTargetData = [];
    const OWFlag = e.value.slice(0,1) === '*'; // 上書き(OverWrite)フラグ
        if(runFlag){
        let tplRows = 0;
        for(let i=0; i<(endRow_tpl-beginRow_LL+1); i++){
            if(tplData[i][13]===e.value){
                if(OWFlag){
                    for(let j=6; j<13; j++){
                        tplTargetData.push(tplData[i][j]);
                    }break; // 上書き属性の場合は1行目のみとして次の処理へ進む
                }else{
                    tplTargetData.push(tplData[i]); // 該当するテンプレを配列に追加
                    tplRows = tplRows + 1; // 該当するテンプレの行数をカウント
                }
            }
        }
        let insFlagRow = 0;
        for(let i=0; i<(endRow_LL-beginRow_LL+1); i++){
            if(llData[i][13]===e.value){
                if(OWFlag){
                    wflSheet.getRange(beginRow_LL+i,7,1,7).setValues(tplTargetData); // テンプレ貼付
                    break;
                }else{
                    wflSheet.insertRowsAfter(beginRow_LL+i,tplRows); // テンプレ指定した位置の下へ空白行を挿入
                    wflSheet.getRange(beginRow_LL+i+1,1,tplRows,26).setValues(tplTargetData); // テンプレ貼付 
                }insFlagRow = (beginRow_LL+i); // テンプレ指定の位置を把握 
            }
        }
        wflSheet.getRange(insFlagRow,14,tplRows+1,1).setValue(''); // テンプレ指定のフラグを初期化
        if(!OWFlag){
            formulaReset('call',tplRows); // 数式リセット
            formatReset('call',tplRows); // 書式リセット
        }
    }
}