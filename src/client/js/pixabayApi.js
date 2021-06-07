async function pictureData(geoLocation) {
    const resPic = await fetch('http://localhost:8081/picture', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(geoLocation),
    }).then(res => res.json())
        .then(async res => {
            let pictureHtml = `<div class="city-image">
                                       <img id="city-img" class="main-image" src="${res.hits[0].webformatURL}">
                                    </div>`;
            let subpic = `<div class= "text-center">
                                         <img id="img-one" class="sub-image" src="${res.hits[1].webformatURL}"/>
                                         <img id="img-two" class="sub-image" src="${res.hits[2].webformatURL}"/>
                                        <img id="img-three" class="sub-image" src="${res.hits[3].webformatURL}"/>
                                    </div>`;
            document.getElementById("picture").innerHTML = pictureHtml;
            document.getElementById("sub-pic").innerHTML = subpic;
        })
        .catch(err => {
            console.log(err)
        });
}
export { pictureData }