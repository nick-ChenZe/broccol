import { observable, action } from 'mobx';
import { FETCH_DIR_PATH, FETCH_BLOB_PATH, ROOT } from './constants';
import { fetch, format } from '../helpers';
import { File, Folder } from '../types';

export interface IRepository {
  fileTree: Folder;
  activeCodeBlob: string;
  fetchPath: (folder: Folder) => void;
  fetchRoot: () => void;
  count: number;
}

/**
 * @observe fileTree
 * {
 *  [name]: {
 *    type: string,
 *    path: string,
 *    sha: string
 *    children: []
 *  },
 *  [anotherName]: {
 *  }
 * }
 */
export default observable(<IRepository>{
  // Init with a root folder
  fileTree: new Folder({ path: ROOT, name: 'Root' }),
  // code blob
  activeCodeBlob: '',
  // custom reaction trigger, as map.add not firing view change
  count: 0,
  // wrap for fetchPath, fetch root dir
  fetchRoot: action.bound(function() {
    this.fetchPath(this.fileTree);
  }),
  // when target is a folder, fetch folder structure
  fetchPath: action.bound(function(folder: Folder) {
    fetch(format(FETCH_DIR_PATH, folder.path)).then(response => {
      response.forEach(resFile => {
        let isDir = resFile.type === 'dir';
        let item = isDir ? new Folder(resFile) : new File(resFile);
        folder.add(item);
      });
      this.count++;
    });
  }),
  // when target is a file, fetch file base64 blob
  fetchFile: action.bound(function(file: File) {
    fetch(format(FETCH_BLOB_PATH, file.sha)).then(response => {
      this.activeCodeBlob = response.blob;
    });
  })
});
