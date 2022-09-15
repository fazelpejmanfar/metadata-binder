const fs = require("fs");
const JsonDir = `${__dirname}/jsons`;
const files = fs.readdirSync(JsonDir);


const append = async() => {
    let metadata = [];
    const get = await files.forEach(file => {
        let data = JSON.parse(fs.readFileSync(`${JsonDir}/${file}`));
        metadata.push(data)
    });
 fs.writeFileSync(`${__dirname}/FullMetadata.json`, JSON.stringify(metadata, null, 3));
 console.log("Done")
}

append();





