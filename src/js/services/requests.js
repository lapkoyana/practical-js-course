const postData = async (url, formData) => {
    const response = await fetch(url, {
        method: 'POST',
        data: formData
    })

    return await response.text()
}

const getData = async (url) => {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status - ${response.status}`)
    }

    return await response.json()
}

export {postData, getData}