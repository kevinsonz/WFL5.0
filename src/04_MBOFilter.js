// MBOフィルターのモード切替え

function tplInsert(e){
    const runFlag = (endCol === mboCol) && (e['value'] === true) && (e['range'] === 'A2');
    if(runFlag){
        let filterGTD = mboSheet.getFilter();
        if(filterGTD !== null){
            gtdSheet.getFilter().remove();
        }
        if(statusMBO === '今'){
            gtdSheet.getRange(1,1,endRow_MBO,mboCol).createFilter();
            //フィルタの条件設定　【キャベツと等しい】
            let rule = SpreadsheetApp.newFilterCriteria()
            .whenTextEqualTo("Visible")
            .build();
            //リスト範囲にフィルタを設定し、3列目が"キャベツ"の行のみを表示する
            sh.getRange("B" + beginRow_MBO + ":F" + mboRow).createFilter().setColumnFilterCriteria(3,rule);
        }
    }
    mboSheet.getRange('A2').setValue(false);
}