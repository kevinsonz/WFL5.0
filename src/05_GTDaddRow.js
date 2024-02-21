// GTD行追加

function addRowGTD(){
    if(statusGTD === 'Add'){
        gtdSheet.getRange(1,1,endRow_GTD,11).setBorder(true,true,true,true,true,true,SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
        let filterGTD = gtdSheet.getFliter();
        if(filterGTD !== null){
            gtdSheet.getFilter().remove();
        }
        gtdSheet.getRange(1,1,endRow_GTD,11).createFilter();
        const maxNo = Math.max.apply(null,gtdNo);
        let addNo = 0;
        for(i=0;i<endRow_GTD;i++){
            addNo = addNo + 1 ;
            if(gtdData[i][10] === ''){
                gtdSheet.getRange(2+i,1).setValue(maxNo + addNo);
                gtdSheet.getRange(2+i,7).setFormula('=iferror(if(or(I'+(2+i)+'="完了",I'+(2+i)+'="保留",I'+(2+i)+'="中止"),9,ifs(and(E'+(2+i)+'=E$1,F'+(2+i)+'=F$1),1,and(E'+(2+i)+'=E$1,F'+(2+i)+'<>F$1),2,and(E'+(2+i)+'<>E$1,F'+(2+i)+'=F$1),3,and(E'+(2+i)+'<>E$1,F'+(2+i)+'<>F$1),4)),9)');
                gtdSheet.getRange(2+i,7).setFormula('=countifs(A$2:A,A'+(2+i)+')');
            }
        }
    }
}