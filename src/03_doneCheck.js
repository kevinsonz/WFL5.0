// 行列
const llData = gssSheet.getRange(beginRow,1,endRow-beginRow+1,endCol).getValues();

// 日ヘッダーエラー行書式設定
function doneCheck(e){
    const isLL = typeData === 'LL'
    const doneFlag = (e.value === 'Done') && isLL;
    const runFlag = (runFunc === 'エラー') && isLL;
    if(doneFlag || runFlag){
        for(let i=0;i<(endRow-beginRow+1);i++){
            if(llData[i][0]===true){
                if(llData[i][15]===0){
                    if(llData[i][22]<5){
                        gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('black');
                        gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }else if(llData[i][22]>=5){
                        gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('#990000');
                        gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }
                }else if(llData[i][15]===1){
                    gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('red');
                    gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    gssSheet.getRange(i+beginRow,7).setValue('');
                }
            }
        }
        const errorCommon = gssSheet.getRange('O2').getValue();
        if(errorCommon>0){
            gssSheet.getRange(1,1,1,endCol).setBackground('red');
            gssSheet.getRange(1,1,1,endCol).setFontColor('white');
        }else if(errorCommon===0){
            gssSheet.getRange(1,1,1,endCol).setBackground('white');
            gssSheet.getRange(1,1,1,endCol).setFontColor('black');
        }
        if(runFlag){
            gssSheet.getRange('C2').setValue('');
        }
    }
}