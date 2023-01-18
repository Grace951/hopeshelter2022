const fs = require('fs');
const probe = require('probe-image-size');
const { exit } = require('process');

const args = process.argv.slice(2);

if (args[0] === undefined || args[1] === undefined) {
  console.error(
    `Usage: npm run genratio <input file path> <output file path>
    e.g. "npm run genratio data/recentWorksRaw.json data/recentWorks.json"`
  );
  exit();
}
const inputFile = `../${args[0]}`;
const outpotFile = args[1];
const works = require(inputFile);

async function getImgRatios(files) {
  const output = [];
  await Promise.all(
    files.map(async (file, i) => {
      const info = await probe(fs.createReadStream(file));
      output[i] = info.height / info.width;
      //   console.log(output[i].imgRatio);
      /*
          {
              width: xx,
              height: yy,
              type: 'jpg',
              mime: 'image/jpeg',
              wUnits: 'px',
              hUnits: 'px',
              url: 'http://example.com/image.jpg'
          }
          */
    })
  );
  return output;
}

(async () => {
  const files = works.map(
    (item) => `public${item.images?.[0] || item.fullsrc}`
  );
  const output = await getImgRatios(files);
  const outputContent = works.map((item, i) => ({
    imgRatio: output[i],
    ...item,
  }));
  const jsonString = JSON.stringify(outputContent, null, 2);
  await fs.promises.writeFile(outpotFile, jsonString);
})();
