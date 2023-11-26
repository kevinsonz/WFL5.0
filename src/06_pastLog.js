const bkSheet = gssFile.getSheetByName('bkLog');
const endBkRow = bkSheet.getMaxRows();
const bkPasteRange = bkSheet.getRange(1,1,endRow-beginRow+1,endCol);

function bkLog(){ // 2023/11/26としては、初回の1発目だけ使用。2回目以降は過渡期処理を使用。
    // bkLogシートの行削除処理
    if(endBkRow>1){
        bkSheet.deleteRows(2,endBkRow-1);
    }
    bkSheet.getRange('A1:Y1').clear();

    // bkLogシートの行追加処理
    bkSheet.insertRowsAfter(1,endRow-beginRow);

    // LifeLog→bkLogコピー処理
    llDataRange.copyTo(bkPasteRange,{contentsOnly:true});

    // LifeLog→bkLogコピー処理済みのLifeLog行を削除
    llSheet.deleteRows(beginRow+1,endRow-beginRow);
    llSheet.getRange('F8:J8').setValue('');
    llSheet.getRange('K8:L8').setValue(false);
    llSheet.getRange('M8').setValue('');  
}

function preBkLog(){ // bk運用が完成するまでは、こちらを使用。
    // bkLogシートの行追加処理
    bkSheet.insertRowsAfter(endBkRow,endRow-beginRow);

    // LifeLog→bkLogコピー処理
    const preBkPasteRange = bkSheet.getRange(endBkRow+1,1,endRow-beginRow+1,endCol);
    llDataRange.copyTo(preBkPasteRange,{contentsOnly:true});

    // LifeLog→bkLogコピー処理済みのLifeLog行を削除
    llSheet.deleteRows(beginRow+1,endRow-beginRow);
    llSheet.getRange('F8:J8').setValue('');
    llSheet.getRange('K8:L8').setValue(false);
    llSheet.getRange('M8').setValue('');    
}