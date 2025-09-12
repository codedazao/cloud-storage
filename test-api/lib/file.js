import fs from "node:fs";

export const readJsonFile = (path,encoding="utf8") =>{
    const userList = fs.readFileSync(path, encoding);
    return JSON.parse(userList);
}