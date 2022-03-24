const API_KEY = 'd797cafeafmshf60e275e1a7122bp1c9c9ajsne129711de763'

export const fetchData = async ( query, search = 'search' ) => {
    if ( search === 'videos' ) {
        const response = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${ query } videos`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'MX',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': API_KEY
            }
        });

        const data = await response.json();
        return data;

    } else {
        const response = await fetch(`https://google-search3.p.rapidapi.com/api/v1/${ search }/q=${ query }`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': API_KEY
            }
        });

        const data = await response.json();
        return data;
    }
}
