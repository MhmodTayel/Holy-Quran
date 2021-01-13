const output = document.getElementById('output')
const surah = document.getElementById('surah')
const getSurah = document.getElementById('get-surah')
getSurah.addEventListener('click',() => {
  const surahNumber = surah.value
  if(surahNumber < 115 && surahNumber > 0)
   {  
     output.innerText = ''
     getSura(surahNumber)
   } else {
     output.innerText = 'ضع رقم صحيح للصوره '
   }

})
async function getSura(number) {
  let res = await
   fetch(`https://api.quran.sutanlab.id/surah/${number? number :1}`)
  let output = await res.json()
   console.log(output)
   showSura(output)
 }
 


 function showSura(API_Output) {
   const verses = API_Output.data.verses
  verses.forEach(verse => {
    output.innerText += `${verse.text.arab}.`
      });
 }

