const furiaCS = ["falleN","chelo","skullz","yuurih","KSCERATO"];

const indice = furiaCS.indexOf("chelo")



console.log(indice)

const subst = furiaCS.splice(1, 2,  "molodoy", "YEKINDAR")
console.log(furiaCS)

const map = furiaCS.map((carro) => carro.toUpperCase())
console.log(map)

const sort = map.sort()
console.log(sort)


const filter = furiaCS.filter((carro) => carro.startsWith("y"))
console.log(filter)