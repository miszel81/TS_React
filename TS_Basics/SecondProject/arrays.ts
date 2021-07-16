const carMakersa =['ford', 'toypta', 'chevy']
const otherArray: string[] = []

const dates = [new Date(), new Date()]

const carsByMake = [
    ['f250'], 
    ['corola'],
    ['camaro']
]

//Help with infrance when extracting values
const car = carMakersa[0]
const myCar = carMakersa.pop()

//help with map
carMakersa.map((car: string): string => {
    return car
})

//felxible type
const importantDates = [new Date(), '2030-10-03']

const importantDates2: (Date | string)[] = [new Date()]
importantDates2.push('2010-10-10')
importantDates2.push(new Date())

