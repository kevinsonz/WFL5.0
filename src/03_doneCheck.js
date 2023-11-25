// 日ヘッダーエラー行書式設定
function doneCheck(e){
    llData = llSheet.getRange(beginRow,1,endRow-beginRow+1,endCol).getValues();
    const doneFlag = ((e.value === 'Done') || (e === 'call')) && isLL && okCol;
    const runFlag = (runFunc === 'エラー') && isLL && okCol;
    if(doneFlag || runFlag){
        for(let i=0;i<(endRow-beginRow+1);i++){
            if(llData[i][0]===true){
                if(llData[i][15]===0){
                    if(llData[i][22]<5){
                        llSheet.getRange(i+beginRow,1,1,endCol).setBackground('black');
                        llSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }else if(llData[i][22]>=5){
                        llSheet.getRange(i+beginRow,1,1,endCol).setBackground('#990000');
                        llSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }
                }else if(llData[i][15]===1){
                    llSheet.getRange(i+beginRow,1,1,endCol).setBackground('red');
                    llSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    llSheet.getRange(i+beginRow,7).setValue('');
                }
            }
        }
        const errorCommon = llSheet.getRange('O2').getValue();
        if(errorCommon>0){
            llSheet.getRange(1,1,1,endCol).setBackground('red');
            llSheet.getRange(1,1,1,endCol).setFontColor('white');
        }else if(errorCommon===0){
            llSheet.getRange(1,1,1,endCol).setBackground('white');
            llSheet.getRange(1,1,1,endCol).setFontColor('black');
        }
        if(runFlag){
            llSheet.getRange('C2').setValue('');
        }
    }
}