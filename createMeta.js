const axios = require('axios')
const fs = require('fs')
const main = async () => {
    try {
        const dataRaw = await axios.get('https://api.github.com/repos/cutls/TheDesk/releases')
        const release = dataRaw.data[0]
        const { name, tag_name, assets } = release
        const codename = name.match(/\(([A-Za-z]+)\)/)[1]
        const version = tag_name.replace('v', '')
        const ret = {}
        for (const asset of assets) {
            const { browser_download_url: url, name: assetName, size } = asset
            if (assetName === 'TheDesk-setup.exe') ret.winX64 = { url, size }
            if (assetName === 'TheDesk-setup-ia32.exe') ret.winIa32 = { url, size }
            if (assetName === 'TheDesk.exe') ret.winX64P = { url, size }
            if (assetName === 'TheDesk-ia32.exe') ret.winIa32P = { url, size }
            if (assetName.match(/thedesk_([0-9.]+)_amd64-normal\.snap/)) ret.linuxSnap = { url, size }
            if (assetName.match(/thedesk_([0-9.]+)_amd64\.deb/)) ret.linuxDeb = { url, size }
            if (assetName.match(/thedesk-([0-9.]+)\.zip/)) ret.linuxZip = { url, size }
            if (assetName.match(/TheDesk-([0-9.]+)-universal\.dmg/)) ret.mac = { url, size }
        }
        const lastRelease = dataRaw.data[1]
        const { name: lastName, tag_name: lastTagName, assets: lastAssets } = lastRelease
        const lastCodename = lastName.match(/\(([A-Za-z]+)\)/)[1]
        const lastVersion = lastTagName.replace('v', '')
        let i = 0
        for (const a of lastAssets) {
            i = i + a.download_count
        }
        const json = {
            version,
            codename,
            lastCodename,
            lastVersion,
            lastDls: i,
            assets: ret
        }
        fs.writeFileSync('./src/meta.ts', `export const files = ${JSON.stringify(json)}`)
    } catch (e) {

    }
}
main()