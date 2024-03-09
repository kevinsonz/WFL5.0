// MBOシート：LLData領域

function dataFormulaSet(){
    for(let i=0; i<366; i++){
        const m = mboSheet.getRange(208+i,36).getValue();
        const mm = ('00'+m).slice(-2);
        mboSheet.getRange((208+i),44).setFormula('=countifs(\''+mm+'\'!V:V,AP'+(208+i)+',\''+mm+'\'!B:B,FALSE,\''+mm+'\'!J:J,\"<>\")>0');
    }
}