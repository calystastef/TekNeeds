function createNewFolderWithDocs(projects) {

    const parentFolder = DriveApp.getFolderById("1YtIwt_uDRd5vccTxZV-yg80Qgs9EWBPn");
  
    const folderIterator = parentFolder.getFoldersByName(projects);
    let newFolder;
    
    if (folderIterator.hasNext()) {
  
      // When the folder exists
      newFolder = folderIterator.next();
    } else {
  
      // When the folder doesn't exist
      newFolder = parentFolder.createFolder(projects);
    }
  
    // create the new doc
    var newDoc = DocumentApp.create(projects);
  
    //move the new doc file into the project folder
    DriveApp.getFileById(newDoc.getId()).moveTo(newFolder);
  
    return `https://drive.google.com/drive/folders/${newFolder.getId()}?usp=share_link`;
  }
  