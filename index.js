const fs = require("fs")
const path = require("path")

// README template
const README_TEMPLATE = `# Web Developers Tools\n \n \n`

// read files & return an array as promise
const readFiles = () => {
  const readDirectoryPath = path.join(__dirname, "data")
  const files = fs.readdirSync(readDirectoryPath) // get files name
  const websites = files.map(file =>
    JSON.parse(fs.readFileSync(path.join(__dirname, "data", file)))
  )
  return new Promise((resolve, reject) => resolve(websites))
}

// write README file
const write = async () => {
  const websitesArr = await readFiles()
  const tableHeader = `|#|Name|Keywords|Description|\n|:---|:---|:---|:---|`
  const tableBody = websitesArr
    .sort((s1, s2) => {
      if (s1.name < s2.name) return -1
      if (s1.name > s2.name) return 1
      return 0
    })
    .map(
      (item, index) =>
        `\n|${index}|[${item.name}](${item.url})|${item.keywords.join(", ")}|${
          item.description
        }|`
    )
    .join("")

  fs.writeFileSync("README.md", README_TEMPLATE + tableHeader + tableBody)
}

write()
