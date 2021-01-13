async function getSura() {
  let res = await
   fetch('https://api.quran.sutanlab.id/surah/110')
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

 const output = document.getElementById('output')