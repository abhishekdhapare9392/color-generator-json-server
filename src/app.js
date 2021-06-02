var searchInput = document.querySelector('#search');
var searchBtn = document.querySelector('#searchBtn');


searchBtn.addEventListener('click', e => {
  var searchValue =  searchInput.value;
  if(searchValue != null && searchValue != ''){
    
    fetch(`http://localhost:3000/colors?q=${searchValue}`)
    .then(response => response.json())
    .then(data => {
      if(data.length > 0){
        const { color_hex, color_name, color_rgb, id }  = data[0];
        
        let cardBody = `
            <div class="card">
                <div class="card-body" style="background: rgba(240, 240, 240, 1)">
                <div class="row">
                  <div class="col-md-12">
                    <h4>Color Name: <span style="color: ${color_hex}">${color_name}<span></h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h5>Hex</h5>
                    <p>${color_hex}</p>
                  </div>
                  <div class="col-md-6">
                    <h5>RGBA</h5>
                    <p>${color_rgb}</p>
                  </div>
                </div>
              </div>
            </div>
        `;
        document.querySelector('.displayCard').innerHTML = cardBody;
      } else {
        document.querySelector('.displayCard').innerHTML = "<h4 class='text-danger text-center'>Color not found</h4>"
      }
    })
  } else {
    document.querySelector('.displayCard').innerHTML = `<h4 class='text-danger text-center'>Enter color name in search box!</h4>`;
  }
})