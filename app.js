const output = document.getElementById('output')
const surah = document.getElementById('surah')
const getSurah = document.getElementById('get-surah')
getSurah.addEventListener('click',() => {

})
async function getSura() {
  let res = await
   fetch(`https://api.quran.sutanlab.id/surah/${surah.value}`)
  let output = await res.json()
   console.log(output)
   showSura(output)
 }
 
 getSura()

 function showSura(API_Output) {
   const verses = API_Output.data.verses
  verses.forEach(verse => {
    output.innerText += `${verse.text.arab}.`
      });
 }

