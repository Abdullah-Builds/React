export async function Github_Api(){
    const response = await fetch('https://api.github.com/users/Abdullah-Builds')
    return response.json()
 }