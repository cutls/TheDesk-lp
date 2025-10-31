const axios = require('axios')
const fs = require('fs')
const mainV24 = async () => {
	try {
		const dataRaw = await axios.get('https://api.github.com/repos/cutls/TheDesk/releases')
		const release = dataRaw.data[0]
		const { name, tag_name, assets, published_at } = release
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
		const date = published_at.split('T')[0]
		let i = 0
		for (const a of lastAssets) {
			i = i + a.download_count
		}
		const json = {
			semanticVersion: version,
			version: `${version} (${codename})`,
			codename,
			lastCodename,
			lastVersion,
			lastDls: i,
			assets: ret,
		}
		const vNotation = `${version} (${codename})`
		const legacy = {
			desk: vNotation,
			desk_linux: vNotation,
			desk_mac: vNotation,
			unique: version,
			unique_linux: version,
			unique_mac: version,
			date,
			detail: 'GitHub\u53c2\u7167',
			detail_en: 'Please visit Github',
			mac: ret.mac.url,
			mac_size: ret.mac.size,
			mac_ct: 0,
			macarm64: ret.mac.url,
			macarm64_size: ret.mac.size,
			macarm64_ct: 0,
			linuxx64: ret.linuxZip.url,
			linuxx64_size: ret.linuxZip.size,
			linuxx64_ct: 0,
			winia32p: ret.winIa32P.url,
			winia32p_size: ret.winIa32P.size,
			winia32p_ct: 0,
			winia32: ret.winIa32.url,
			winia32_size: ret.winIa32.size,
			winia32_ct: 0,
			winx64: ret.winX64.url,
			winx64_size: ret.winX64.size,
			winx64_ct: 0,
			winx64p: ret.winX64P.url,
			winx64p_size: ret.winX64P.size,
			winx64p_ct: 0,
			linuxsnap: ret.linuxSnap.url,
			linuxsnap_size: ret.linuxSnap.size,
			linuxsnap_ct: 0,
			linuxdeb: ret.linuxDeb.url,
			linuxdeb_size: ret.linuxDeb.size,
			linuxdeb_ct: 0,
		}
		fs.writeFileSync('./src/meta.v24.ts', `export const files = ${JSON.stringify(json)}`)
		fs.writeFileSync('./public/ver.json', JSON.stringify(legacy))
		fs.writeFileSync('./public/ver.v2.json', JSON.stringify(json))
	} catch (e) {}
}
const mainV25 = async () => {
	try {
		const dataRaw = await axios.get('https://api.github.com/repos/cutls/thedesk-next/releases')
		const release = dataRaw.data[0]
		const { name, tag_name, assets, published_at } = release
		const codename = name.match(/\(([A-Za-z]+)\)/)[1]
		const version = tag_name.replace('v', '')
		const ret = {}
		for (const asset of assets) {
			const { browser_download_url: url, name: assetName, size } = asset
			if (assetName.match(/TheDesk\.?([0-9.]+)\.msi/)) ret.win = { url, size }
			if (assetName.match(/thedesk-next_([0-9.]+)_amd64\.deb/)) ret.linuxDeb = { url, size }
			if (assetName.match(/thedesk-next-([0-9.]+)\.zip/)) ret.linuxZip = { url, size }
			if (assetName.match(/TheDesk-([0-9.]+)-universal\.dmg/)) ret.mac = { url, size }
		}
		const lastRelease = dataRaw.data[1]
		if (!lastRelease) {
			const dataRaw = await axios.get('https://api.github.com/repos/cutls/TheDesk/releases')
			const release = dataRaw.data[0]
			const { name: lastName, tag_name: lastTagName, assets: lastAssets } = release
			const lastCodename = lastName.match(/\(([A-Za-z]+)\)/)[1]
			const lastVersion = lastTagName.replace('v', '')
			let i = 0
			for (const a of lastAssets) {
				i = i + a.download_count
			}
			const json = {
				semanticVersion: version,
				version: `${version} (${codename})`,
				codename,
				lastCodename,
				lastVersion,
				lastDls: i,
				assets: ret,
			}
			fs.writeFileSync('./src/meta.ts', `export const files = ${JSON.stringify(json)}`)
			fs.writeFileSync('./public/ver.next.json', JSON.stringify(json))
		} else {
			const { name: lastName, tag_name: lastTagName, assets: lastAssets } = lastRelease
			const lastCodename = lastName.match(/\(([A-Za-z]+)\)/)[1]
			const lastVersion = lastTagName.replace('v', '')
			let i = 0
			for (const a of lastAssets) {
				i = i + a.download_count
			}
			const json = {
				semanticVersion: version,
				version: `${version} (${codename})`,
				codename,
				lastCodename,
				lastVersion,
				lastDls: i,
				assets: ret,
			}
			fs.writeFileSync('./src/meta.ts', `export const files = ${JSON.stringify(json)}`)
			fs.writeFileSync('./public/ver.next.json', JSON.stringify(json))
		}
	} catch (e) {
		console.error(e)
	}
}
mainV24()
mainV25()
