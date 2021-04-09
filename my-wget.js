const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const response = await axios.get('https://2miners.com/blog/')
    await fsPromises.writeFile('index.html', response.data) // response.data est une string qui est la page html
  } catch (e) {
    console.log(e.message)
  }
}

main()