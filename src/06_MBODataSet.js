// MBOシート：LLData領域

function dataFormulaSet(){
    const mmDays = mboSheet.getRange('AR143:AR154').getValues();
    for(let i=0; mmDays.length; i++){
        for(let j=0; j<mmDays[i]; j++){ // 1年=366日(閏日含む)
            const m = mboSheet.getRange(mboRow_DayStart+j,mboCol_Mm).getValue();
            const mm = ('00'+m).slice(-2);
            mboSheet.getRange((mboRow_DayStart+j),mboCol_DataFormula).setFormula('=countifs(\''+mm+'\'!V:V,AP'+(mboRow_DayStart+j)+',\''+mm+'\'!B:B,FALSE,\''+mm+'\'!J:J,\"<>\")>0');
        }
    }
}