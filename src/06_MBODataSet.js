// MBOシート：LLData領域

function dataFormulaSet(){
    const mmDays = mboSheet.getRange('AR143:AR154').getValues(); // 月の日数
    const m = mboSheet.getRange('AJ143:AJ154').getValues(); // 月の情報
    let nextRow = 0;
    for(let i=0; i<mmDays.length; i++){
            const mm = ('00'+m[i][0]).slice(-2);
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula,Number(mmDays[i][0]),1).setFormula('=countifs(\''+mm+'\'!V:V,AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!B:B,FALSE,\''+mm+'\'!J:J,\"<>\")>0');
            nextRow = nextRow+Number(mmDays[i][0]);
    }
}