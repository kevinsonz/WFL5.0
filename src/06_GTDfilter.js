// GTDフィルター: On/Off切替え

function hiddenGTD(e){
    const runFlug = e['range']==='I1' && endCol === 11;
    if(runFlug){
        if(e['value']===true){
            const rule1 = SpreadsheetApp.newFilterCriteria()
            .whenTextEqualTo('完了')
            .build();　//ビルダーを構築
            const rule2 = SpreadsheetApp.newFilterCriteria()
            .whenTextEqualTo('中止')
            .build();　//ビルダーを構築
            gtdSheet.getDataRange().createFilter()
            .setColumnFilterCriteria(1, rule1)
            .setColumnFilterCriteria(1, rule2);
        }else{
            gtdSheet.getFilter().remove();
            gtdSheet.getRange(beginRow_GTD-1,1,endRow_GTD,11).createFilter();
        }
    }
}