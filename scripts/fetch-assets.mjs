import fs from "node:fs"
import path from "node:path"
import https from "node:https"

const url = "https://share.google/images/LBuXMhvOxcQIVN43a"
const outPath = path.join(process.cwd(), "public", "bgmi.jpg")

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
}

function download(urlStr, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(urlStr, (response) => {
        if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          // handle redirects
          download(response.headers.location, dest).then(resolve).catch(reject)
          return
        }
        if (response.statusCode !== 200) {
          file.close()
          fs.unlink(dest, () => {})
          return reject(new Error(`Failed to download: ${response.statusCode}`))
        }
        response.pipe(file)
        file.on("finish", () => file.close(resolve))
      })
      .on("error", (err) => {
        file.close()
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

async function main() {
  try {
    ensureDir(path.dirname(outPath))
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      return
    }
    await download(url, outPath)
    // eslint-disable-next-line no-console
    console.log(`Downloaded asset -> ${outPath}`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("Asset download skipped:", e.message)
  }
}

main()


