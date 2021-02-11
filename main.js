
fetch('https://api.sampleapis.com/countries/countries')
    .then(response => response.json())
    .then(countries => {
        for (const countrie of countries) {

            document.write(

                `
                <div class = "countrisInfo">

                    <h3>${countrie.name}</h3>
                    <p style = "text-align: center">Capital: <b> ${countrie.name}</b></p>
                    <p> money :<b> ${countrie.currency}</b></p>
                    <p>phone Code: <b>${countrie.phone}</b></p>
                    <hr>

                    <div class = "images" style = "display: flex">
                    <img src = "${countrie.media.flag}" alt="${countrie.abbreviation}_img"  style = "width: 50%">
                   
                    <img src = "${countrie.media.emblem}" alt="${countrie.abbreviation}_img"  style = "width: 50%">
                   </div>

                   <h3 class = "title_h3" style = "text-align: center; color:red">Geographi</h3>
                   <div>               
                   <img src = "${countrie.media.orthographic}" alt=""   style = "display:block; margin:auto; width: 70%">
                   </div>

                </div>
                `

            );
        }
      
    });