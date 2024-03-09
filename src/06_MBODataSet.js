// MBOシート：LLData領域

function dataFormulaSet(){
    for(let i=0; i<366; i++){
        const mm = mboSheet.getRange(208+i,36).getValue().padStart(2,'0');
        mboSheet.getRange((208+i),44).setFormula('=countifs(\''+mm+'\'!V:V,AP'+(208+i)+',\''+mm+'\'!B:B,FALSE,\''+mm+'\'!J:J,\"<>\")>0');
    }
}