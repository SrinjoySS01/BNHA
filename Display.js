let link1_258 = 'https://official-ongoing-2.gamindustri.us/manga/Boku-No-Hero-Academia/0'
let link259_305 = 'https://scans-hot.leanbox.us/manga/Boku-No-Hero-Academia/0'
function displayPages(link, pageNumber, chapNo) {
    for (let i = 1; i <= pageNumber; i++) {
        let lnk = `${link}${chapNo}-${'0'.repeat(3 - `${i}`.length)}${i}.png`
        document.write(`<img src="${lnk}" alt="chapter ${chapNo}, page ${i}"><br>chapter ${parseInt(chapNo)}, page ${i}`)
    }
}
function display(details) {
    for (let i = 1; i <= Object.keys(details).length; i++) {
        let _No = `_No. ${i}`
        if (i >= 1 && i <= 258)
            displayPages(link1_258, details[_No], `${'0'.repeat(3 - `${i}`.length)}${i}`)
        else displayPages(link259_305, details[_No], `${'0'.repeat(3 - `${i}`.length)}${i}`)
    }
}