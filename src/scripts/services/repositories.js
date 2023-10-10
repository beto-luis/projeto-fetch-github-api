import { baseUrl, repositoriesQuantities } from "/src/scripts/variables.js"

async function repositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantities}`)
    return await response.json()
}

export { repositories }