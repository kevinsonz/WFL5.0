// MBOシート：LLData領域

function getColName(num) {
    let result = mboSheet.getRange(1, num);
    result = result.getA1Notation();
    result = result.replace(/\d/,'');
    return result;
  }

function dataFormulaSet(){
    const ymd = getColName(3);
    const m = getColName(mboCol_DataFormula-8); 
    const ymd8 = getColName(mboCol_DataFormula-2);
    const status = getColName(mboCol_DataFormula); 
    const start = getColName(mboCol_DataFormula+1);
    const end = getColName(mboCol_DataFormula+2);
    const zzz1 = getColName(mboCol_DataFormula+3);
    const wfl = getColName(mboCol_DataFormula+4);
    const zzz2 = getColName(mboCol_DataFormula+9);
    const age = getColName(mboCol_DataFormula+11);
    const sage = getColName(mboCol_DataFormula+17);
    const mmDays = mboSheet.getRange(status+'143:'+status+'154').getValues().flat(); // 月の日数
    const mData = mboSheet.getRange(m+'143:'+m+'154').getValues().flat(); // 月の情報
    let nextRow = 0;
    for(let i=0; i<mmDays.length; i++){
            const mm = ('00'+mData[i]).slice(-2);
            // 1つ目（状態）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+0,Number(mmDays[i]),1)
                .setFormula('=countifs(\''+mm+'\'!V:V,'+ymd8+(mboRow_DayStart+nextRow)+',\''+mm+'\'!B:B,FALSE,\''+mm+'\'!J:J,\"<>\")>0');
            // 2つ目（開始時刻）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+1,Number(mmDays[i]),1)
                .setFormula('=if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,minifs(\''+mm+'\'!D:D,\''+mm+'\'!V:V,'+ymd8+(mboRow_DayStart+nextRow)+'-'+ymd+(mboRow_DayStart+nextRow)+'),"-")');
            // 3つ目（終了時刻）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+2,Number(mmDays[i]),1)
                .setFormula('=if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,maxifs(\''+mm+'\'!E:E,\''+mm+'\'!V:V,'+ymd8+(mboRow_DayStart+nextRow)+'-'+ymd+(mboRow_DayStart+nextRow)+'),"-")');
            // 4つ目（ZZ基準（終了-開始））
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+3,Number(mmDays[i]),1)
                .setFormula('=iferror(if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,if(('+start+(mboRow_DayStart+nextRow)+'-offset('+end+(mboRow_DayStart+nextRow)+',-1,0))*24>=0,('+start+(mboRow_DayStart+nextRow)+'-offset('+end+(mboRow_DayStart+nextRow)+',-1,0))*24,"NG"),"-"),"-")');
            // 5つ目（6列分：WFLEOZ実績）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+4,Number(mmDays[i]),6)
                .setFormula('=if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,sumifs(\''+mm+'\'!$G:$G,\''+mm+'\'!$V:$V,$'+ymd8+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid('+wfl+'$2,1,1)),"-")');
            // 6つ目（睡眠時間：ZZ基+Z実）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+10,Number(mmDays[i]),1)
                .setFormula('=iferror(if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,'+zzz1+(mboRow_DayStart+nextRow)+'+'+zzz2+(mboRow_DayStart+nextRow)+',"-"),"-")');
            // 7つ目（6列分：WFLEOZアゲ）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+11,Number(mmDays[i]),6)
                .setFormula('=if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,countifs(\''+mm+'\'!$L:$L,TRUE,\''+mm+'\'!$V:$V,$'+ymd8+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid('+age+'$2,1,1)),"-")');
            // 8つ目（6列分：WFLEOZサゲ）
            mboSheet.getRange(mboRow_DayStart+nextRow,mboCol_DataFormula+17,Number(mmDays[i]),6)
                .setFormula('=if($'+status+(mboRow_DayStart+nextRow)+'=TRUE,countifs(\''+mm+'\'!$M:$M,TRUE,\''+mm+'\'!$V:$V,$'+ymd8+(mboRow_DayStart+nextRow)+',\''+mm+'\'!$H:$H,mid('+sage+'$2,1,1)),"-")');
            nextRow = nextRow+Number(mmDays[i]);
    }
}