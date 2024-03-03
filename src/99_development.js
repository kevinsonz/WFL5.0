function development(e){
    const logSheet = wflFile.getSheetByName('Log');
    logSheet.getRange('A1').setValue(e);
}