// テンプレート挿入

function tplInsert(e){
    llData = wflSheet.getRange(beginRow_LL,1,endRow_LL-beginRow_LL+1,endCol).getValues();
    const tplNamesSheet = wflFile.getSheetByName('tplNames');
    const tplNames = tplNamesSheet.getRange('A1:A').getValues().flat();
    const tplDataCheck = tplNames.includes(e.value);
    const runFlag =  tplDataCheck && typeData === 'LL';
    let tplTargetData = [];
    const owFlag = e.slice(0,1) === '_'; // 上書き(OverWrite)フラグ
    if(runFlag){
        let tplRows = 0; // テンプレ行数
        let insFlagRow = 0; // テンプレフラグ位置
        if(!owFlag){ // テンプレ挿入モード
            // テンプレ対象取得
            for(let i=0; i<(endRow_tpl-beginRow_LL+1); i++){
                if(tplData[i][13]===e.value){
                    tplTargetData.push(tplData[i]); // 該当するテンプレを配列に追加
                    tplRows = tplRows + 1; // 該当するテンプレの行数をカウント
                }
            }
            // テンプレ挿入処理
            for(let i=0; i<(endRow_LL-beginRow_LL+1); i++){
                if(llData[i][13]===e.value){
                    wflSheet.insertRowsAfter(beginRow_LL+i,tplRows); // テンプレ指定した位置の下へ空白行を挿入
                    wflSheet.getRange(beginRow_LL+i+1,1,tplRows,26).setValues(tplTargetData); // テンプレ貼付 
                    insFlagRow = (beginRow_LL+i); // テンプレ指定の位置を把握
                }
            }
            wflSheet.getRange(insFlagRow,14,tplRows+1,1).setValue(''); // テンプレ指定のフラグを初期化
            formulaReset('call',tplRows); // 数式リセット
            formatReset('call',tplRows); // 書式リセット
        }else{ // テンプレ上書きモード
            // テンプレ対象取得(1行のみ)
            for(let i=0; i<(endRow_tpl-beginRow_LL+1); i++){
                if(tplData[i][13]===e.value){
                    tplTargetData.push(tplData[i]); // 該当するテンプレを配列に追加
                    tplRows = tplRows + 1; // 該当するテンプレの行数をカウント
                    break; // 上書き属性の場合は1行目のみとして次の処理へ進む
                }
            }
            // テンプレ上書き処理
            for(let i=0; i<(endRow_LL-beginRow_LL+1); i++){
                if(llData[i][13]===e.value){
                    for(let j=6; j<13; j++){
                        wflSheet.getRange(beginRow_LL+i,7+j).setValue(tplTargetData[0][j]); // テンプレ上書き
                    }
                    insFlagRow = (beginRow_LL+i); // テンプレ指定の位置を把握
                    break; // 上書き属性の場合は1行目のみとして次の処理へ進む
                }
            }
            wflSheet.getRange(insFlagRow,14,tplRows,1).setValue(''); // テンプレ指定のフラグを初期化
        }
    }
}