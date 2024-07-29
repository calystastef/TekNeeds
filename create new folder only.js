function createNewFolder(projects) {
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

  return `https://drive.google.com/drive/folders/${newFolder.getid()}?usp=share_link`
}
