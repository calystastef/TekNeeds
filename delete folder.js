function deleteFolder(projects) {
    //find the folder with the 'projects' name
    var folderToDelete = DriveApp.getFoldersByName(projects).next();
    //delete the folder
    folderToDelete.setTrashed(true);
  }
  