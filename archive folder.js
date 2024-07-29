function archiveFolder(projects) {
  const parentFolder = DriveApp.getFolderById("1YtIwt_uDRd5vccTxZV-yg80Qgs9EWBPn");
  const archiveFolderName = "Archive";

  const folderIterator = parentFolder.getFoldersByName(archiveFolderName);
  let archiveFolder;
  if (folderIterator.hasNext()) {
    // When the folder exists
    archiveFolder = folderIterator.next();
  } else {
    // When the folder doesn't exist
    archiveFolder = parentFolder.createFolder(archiveFolderName);
  }

  var folderToDelete = DriveApp.getFoldersByName(projects).next();
  folderToDelete.moveTo(archiveFolder)
}
