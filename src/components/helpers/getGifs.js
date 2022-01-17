export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=K3BPvI8lbOMjNYZXo30H1oUbrQE6Yn7o`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            urlImage: image.images?.original.url
        };
    });
    
    return gifs;
};