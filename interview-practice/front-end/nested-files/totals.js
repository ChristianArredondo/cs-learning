
const files = [
  dirObj('docs', [
    fileObj('resume.docx'),
    fileObj('sheet.xlsx'),
    dirObj('archive', [
      fileObj('resume.docx'),
      fileObj('sheet.xlsx'),
      dirObj('archive')
    ])
  ]),
  fileObj('profile-pic.jpg')
];

const getWithSums = files => {
  return files.map(file => {
    if (file.type === 'file') return file;

    if (file.type === 'dir') {
      return getDirWithTotal(file);
    }
  });
};

/**
 * @returns {Number} number
 */
const getDirWithTotal = dir => {
  let dirTotal = 0;
  dir.children = dir.children.map((child) => {
    dirTotal++;

    if (child.type === 'file') {
      return child;
    }

    if (child.type === 'dir') {
      const subDirWithTotal = getDirWithTotal(child);
      dirTotal += subDirWithTotal.total;
      return subDirWithTotal;
    }
  });

  return {
    ...dir,
    total: dirTotal
  };
};

const logFiles = files => {
  files.forEach(file => {
    console.log(file);
    if (file.children) logFiles(file.children);
  });
};

logFiles(getWithSums(files));

function dirObj(name, children = []) {
  return { name, children, type: 'dir' };
}
function fileObj(name) {
  return { name, type: 'file' };
}