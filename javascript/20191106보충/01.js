const COLORS = ['one', 'two', 'three']

for (var i=0; i<COLORS.length; i++) {
  console.log(COLORS[i])
}
COLORS.forEach( color => console.log(color))

const IMAGES = [
  {width: 10, height: 30},
  {width: 12, height: 40},
  {width: 30, height: 12},
]

const areas = []
IMAGES.forEach( image => areas.push(image.width * image.height))
console.log(areas)
