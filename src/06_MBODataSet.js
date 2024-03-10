// MBOシート：LLData領域

function dataFormulaSet(){
    const mmDays = mboSheet.getRange('AR143:AR154').getValues(); // 月の日数
    const m = mboSheet.getRange('AJ143:AJ154').getValues(); // 月の情報
    let nextRow = 0;
    for(let i=0; i<mmDays.length; i++){
            const mm = ('00'+m[i][0]).slice(-2);
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+0,Number(mmDays[i][0]),1)
                .setFormula('=countifs(\''+mm+'\'!V:V,AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!B:B,FALSE,\''+mm+'\'!J:J,\"<>\")>0');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+1,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,minifs(\''+mm+'\'!D:D,\''+mm+'\'!V:V,AP'+(mboRow_DayStart+nextRow)+'),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+2,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,maxifs(\''+mm+'\'!E:E,\''+mm+'\'!V:V,AP'+(mboRow_DayStart+nextRow)+'),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+3,Number(mmDays[i][0]),1)
                .setFormula('=iferror(if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,if((AS'+(mboRow_DayStart+nextRow)+'-offset(AT'+(mboRow_DayStart+nextRow)+',-1,0))*24>=0,(AS'+(mboRow_DayStart+nextRow)+'-offset(AT'+(mboRow_DayStart+nextRow)+',-1,0))*24,"NG"),"-"),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+4,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid(AV$2,1,1)),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+5,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid(AW$2,1,1)),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+6,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid(AX$2,1,1)),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+7,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid(AY$2,1,1)),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+8,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid(AZ$2,1,1)),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+9,Number(mmDays[i][0]),1)
                .setFormula('=if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$AP'+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid(BA$2,1,1)),"-")');
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+10,Number(mmDays[i][0]),1)
                .setFormula('=iferror(if($AR'+(mboRow_DayStart+nextRow)+'=TRUE,AU'+(mboRow_DayStart+nextRow)+'+BA'+(mboRow_DayStart+nextRow)+',"-"),"-")');
            nextRow = nextRow+Number(mmDays[i][0]);
    }
}