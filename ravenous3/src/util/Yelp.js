const clientId = 'tpzppa9dpyCOSg6M6M1zpw';
const secret = 'WwwsuYj6jsLGqhX1fmBwX6kRHkpjaqN13zepX3f8iSH1KmBcX6bH5gU5wth9pfnW';
const accessToken= '';

const Yelp = {
  .getAccessToken() {
    if (accessToken){
      return new Promise(resolve => resolve(accessToken));
    }
    return
    fetch('`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=$clientId&client_secret=$secret`', method: 'POST')
    .then(response => {return response.json();})
    .then(jsonResponse)=> {accessToken= jsonResponse.access_token;}
},
 .search(term, location, sortBy){
   return Yelp.getAccessToken()
    .then(
     fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=`TERM`&location=`LOCATION`&sort_by=`SORT_BY`'),
            headers: {
              Authorization: `Bearer ${accessToken}`;
            })
    .then(return fetch('`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=`TERM`&location=`LOCATION`&sort_by=`SORT_BY`', {method: 'POST'}))
    .then(jsonResponse) {
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map(business => (
          id: business.id,
          imageSrc:business.imageSrc,
          name: business.name,
          address: business.address ,
          city: business.city,
          state: business.state,
          zipCode: business.zipCode,
          category: business.category,
          rating: business.rating,
          reviewCount: business.reviewCount
        );
      }
    };
 }
}

export default Yelp;
