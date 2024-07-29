function createNewFolderWithSheets(projects) {
    const parentFolder = DriveApp.getFolderById("1YtIwt_uDRd5vccTxZV-yg80Qgs9EWBPn");
  
    const folderIterator = parentFolder.getFoldersByName(projects);
    let searchFolder;
  
    if (folderIterator.hasNext()) {
  
      // When the folder exists
      searchFolder = folderIterator.next();
    } else {
  
      // When the folder doesn't exist
      searchFolder = parentFolder.createFolder(projects);
    }
  
    //create new spreadsheet
    var newSheet = SpreadsheetApp.create(projects);
  
    //move the new spreadsheet into the project folder
    DriveApp.getFileById(newSheet.getId()).moveTo(searchFolder);
  
    return `https://drive.google.com/drive/folders/${searchFolder.getId()}?usp=share_link`;
    
  }
  