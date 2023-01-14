const { readdir, unlink } = require("fs");

function deleteImages(path) {
  readdir(path, (err, data) => {
    for (let i = 0; i < data.length; i++) {
      unlink(path + "/" + data[i], (err) => {
        console.log(data[i] + " " + "deleted!");
        console.log("error:", err);
      });
    }
  });
}

deleteImages("./backend/public/posts");
deleteImages("./backend/public/users");
