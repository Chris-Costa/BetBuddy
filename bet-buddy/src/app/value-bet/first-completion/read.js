//no panthers, cowbouys, patriots, commanders, colts


// Requiring the module
const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./Betting.xlsx')
  
let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}

console.log("")
console.log("Weighted overall completion percentage 50% and first attempt percentage at 50%")
console.log("")
// Broncos vs Jaguars
console.log(`Broncos vs Jaguars ${((data[24].Percentage * data[13].Percentage) + (data[24].Fpercentage * data[13].Fpercentage)) / 2}`)
//  Dolphins vs Lions
console.log(`Dolphins vs Lions ${((data[2].Percentage * data[23].Percentage) + (data[2].Fpercentage * data[23].Fpercentage)) / 2}`)
// Cardinals vs Vikings
console.log(`Cardinals vs Vikings ${((data[14].Percentage * data[10].Percentage) + (data[14].Fpercentage * data[10].Fpercentage)) / 2}`)
// Raiders vs Saints
console.log(`Raiders vs Saints ${((data[20].Percentage * data[17].Percentage) + (data[20].Fpercentage * data[17].Fpercentage)) / 2}`)
// Steelers vs Eagles
//  steelers small sample size
// Titans vs Texans
console.log(`Titans vs Texans ${((data[15].Percentage * data[18].Percentage) + (data[15].Fpercentage * data[18].Fpercentage)) / 2}`)
// 49ers vs Rams
console.log(`49ers vs Rams ${((data[16].Percentage * data[1].Percentage) + (data[16].Fpercentage * data[1].Fpercentage)) / 2}`)
// Giants vs Seahawks
console.log(`Giants vs Seahawks ${((data[3].Percentage * data[0].Percentage) + (data[3].Fpercentage * data[0].Fpercentage)) / 2}`)
// Packers vs Bills
console.log(`Packers vs Bills ${((data[5].Percentage * data[6].Percentage) + (data[5].Fpercentage * data[6].Fpercentage)) / 2}`)
// Bengals vs Browns
console.log(`Bengals vs Browns ${((data[8].Percentage * data[22].Percentage) + (data[8].Fpercentage * data[22].Fpercentage)) / 2}`)
console.log("")
console.log("Weighted overall completion percentage 40% and first attempt percentage at 60%")
console.log("")
// Broncos vs Jaguars
console.log(`Broncos vs Jaguars ${((data[24].Percentage * data[13].Percentage) * .4 + (data[24].Fpercentage * data[13].Fpercentage) * .6)}`)
//  Dolphins vs Lions
console.log(`Dolphins vs Lions ${((data[2].Percentage * data[23].Percentage) * .4 + (data[2].Fpercentage * data[23].Fpercentage) * .6)}`)
// Cardinals vs Vikings
console.log(`Cardinals vs Vikings ${((data[14].Percentage * data[10].Percentage) * .4 + (data[14].Fpercentage * data[10].Fpercentage) * .6)}`)
// Raiders vs Saints
console.log(`Raiders vs Saints ${((data[20].Percentage * data[17].Percentage) * .4 + (data[20].Fpercentage * data[17].Fpercentage) * .6)}`)
// Steelers vs Eagles
//  steelers small sample size
// Titans vs Texans
console.log(`Titans vs Texans ${((data[15].Percentage * data[18].Percentage) * .4 + (data[15].Fpercentage * data[18].Fpercentage) * .6)}`)
// 49ers vs Rams
console.log(`49ers vs Rams ${((data[16].Percentage * data[1].Percentage) * .4 + (data[16].Fpercentage * data[1].Fpercentage) * .6)}`)
// Giants vs Seahawks
console.log(`Giants vs Seahawks ${((data[3].Percentage * data[0].Percentage) * .4 + (data[3].Fpercentage * data[0].Fpercentage) * .6)}`)
// Packers vs Bills
console.log(`Packers vs Bills ${((data[5].Percentage * data[6].Percentage) *.4 + (data[5].Fpercentage * data[6].Fpercentage) * .6)}`)
// Bengals vs Browns
console.log(`Bengals vs Browns ${((data[8].Percentage * data[22].Percentage) * .4 + (data[8].Fpercentage * data[22].Fpercentage) * .6)}`)
console.log("")
console.log("Weighted overall completion percentage 30% and first attempt percentage at 70%")
console.log("")
// Broncos vs Jaguars
console.log(`Broncos vs Jaguars ${((data[24].Percentage * data[13].Percentage) * .3 + (data[24].Fpercentage * data[13].Fpercentage) * .7)}`)
//  Dolphins vs Lions
console.log(`Dolphins vs Lions ${((data[2].Percentage * data[23].Percentage) * .3 + (data[2].Fpercentage * data[23].Fpercentage) * .7)}`)
// Cardinals vs Vikings
console.log(`Cardinals vs Vikings ${((data[14].Percentage * data[10].Percentage) * .3 + (data[14].Fpercentage * data[10].Fpercentage) * .7)}`)
// Raiders vs Saints
console.log(`Raiders vs Saints ${((data[20].Percentage * data[17].Percentage) * .3 + (data[20].Fpercentage * data[17].Fpercentage) * .7)}`)
// Steelers vs Eagles
//  steelers small sample size
// Titans vs Texans
console.log(`Titans vs Texans ${((data[15].Percentage * data[18].Percentage) * .3 + (data[15].Fpercentage * data[18].Fpercentage) * .7)}`)
// 49ers vs Rams
console.log(`49ers vs Rams ${((data[16].Percentage * data[1].Percentage) * .3 + (data[16].Fpercentage * data[1].Fpercentage) * .7)}`)
// Giants vs Seahawks
console.log(`Giants vs Seahawks ${((data[3].Percentage * data[0].Percentage) * .3 + (data[3].Fpercentage * data[0].Fpercentage) * .7)}`)
// Packers vs Bills
console.log(`Packers vs Bills ${((data[5].Percentage * data[6].Percentage) *.3 + (data[5].Fpercentage * data[6].Fpercentage) * .7)}`)
// Bengals vs Browns
console.log(`Bengals vs Browns ${((data[8].Percentage * data[22].Percentage) * .3 + (data[8].Fpercentage * data[22].Fpercentage) * .7)}`)

console.log("")
console.log("Weighted overall completion percentage 40% and first attempt percentage at 60% for each player then compare the players at 50 50")
console.log("")
// Broncos vs Jaguars
console.log(`Broncos vs Jaguars ${((data[24].Percentage * .4) + (data[24].Fpercentage * .6) * ((data[13].Percentage * .4) +(data[13].Fpercentage * .6)))}`)
//  Dolphins vs Lions 
console.log(`Dolphins vs Lions ${((data[2].Percentage * .4) + (data[2].Fpercentage * .6) * ((data[23].Percentage * .4) +(data[23].Fpercentage * .6)))}`)
// Cardinals vs Vikings
console.log(`Cardinals vs Vikings ${((data[14].Percentage * .4) + (data[14].Fpercentage * .6) * ((data[10].Percentage * .4) +(data[10].Fpercentage * .6)))}`)
// Raiders vs Saints
console.log(`Raiders vs Saints ${((data[20].Percentage * .4) + (data[20].Fpercentage * .6) * ((data[17].Percentage * .4) +(data[17].Fpercentage * .6)))}`)
// Steelers vs Eagles
//  steelers small sample size
// Titans vs Texans
console.log(`Titans vs Texans ${((data[15].Percentage * .4) + (data[15].Fpercentage * .6) * ((data[18].Percentage * .4) +(data[18].Fpercentage * .6)))}`)
// 49ers vs Rams
console.log(`49ers vs Rams ${((data[16].Percentage * .4) + (data[16].Fpercentage * .6) * ((data[1].Percentage * .4) +(data[1].Fpercentage * .6)))}`)
// Giants vs Seahawks
console.log(`Giants vs Seahawks ${((data[3].Percentage * .4) + (data[3].Fpercentage * .6) * ((data[0].Percentage * .4) +(data[0].Fpercentage * .6)))}`)
// Packers vs Bills
console.log(`Packers vs Bills ${((data[5].Percentage * .4) + (data[5].Fpercentage * .6) * ((data[6].Percentage * .4) +(data[6].Fpercentage * .6)))}`)
// Bengals vs Browns
console.log(`Bengals vs Browns ${((data[8].Percentage * .4) + (data[8].Fpercentage * .6) * ((data[22].Percentage * .4) +(data[22].Fpercentage * .6)))}`)