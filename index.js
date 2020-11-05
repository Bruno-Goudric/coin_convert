const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const coinBase = readlineSync.question('Informe uma moeda base: ') || 'dollar';
  const coinConvert = readlineSync.question('Informe uma moeda desejada: ') || 'real';
  const url = `https://www.google.com/search?q=${coinBase}+para+${coinConvert}&oq=${coinBase}+para+&aqs=chrome.1.69i57j0i10i131i433j0l2j0i10j0l3.3841j1j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  

  const result = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de 1 ${coinBase} em ${coinConvert} é ${result}`)

  await browser.close();
}

robo();