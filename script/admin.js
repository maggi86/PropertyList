// localStorage.removeItem('anime')
let anime = JSON.parse(localStorage.getItem("anime"))
  ? JSON.parse(localStorage.getItem("anime"))
  : [
        {
        id: 1,
        name: "Bakugo",
        age: 20,
        kage: 15,
        type: "Blondes",
        height: 164,
        keight: "172cm",
        rent: "R10 000",
        img: {
          i1: `../image/Bakugo/main-qimg-8082d2ae2288d27a1f8cdbfbb1b1a33e-lq.png`,
          i2: `../image/Bakugo/ndzjkqgl424a.png`,
          i3: `../image/Bakugo/uMF4Hizp_400x400.png`
        }  
        },
        {
        id: 2,
        name: "Ban",
        age: 1000,
        kage: "1000+",
        type: "Color",
        height: 179,
        keight: "210cm",
        rent: "R30 000",
        img: {
          i1: `../image/Ban/Ban_breaking_out_of_his_cell2.png`,
          i2: `../image/Ban/cf92aca6cbbd491282e769ea3ae9f9c7.png`,
          i3: `../image/Ban/uwp1188980.png`
        } 
        },
        {
        id: 3,
        name: "Kageyama",
        age: 20,
        kage: 16,
        type: "Black",
        height: 179,
        keight: "182cm",
        rent: "R10 000",
        img: {
          i1: `../image/Kageyama/anime-cute-haikyuu-kageyama-tobio-Favim.com-4983630.png`,
          i2: `../image/Kageyama/EVVcCk9UMAEMvkS.png`,
          i3: `../image/Kageyama/uj6JyKmL_400x400.png`
        } 
        },
        {
        id: 4,
        name: "Kaneki",
        age: 40,
        kage: 22,
        type: "Color",
        height: 164,
        keight: "170cm",
        rent: "R30 000",
        img: {
          i1: `../image/Kaneki/artworks-000334148184-91h2rn-t500x500.png`,
          i2: `../image/Kaneki/C00f0b1cdb6b673c067c249fb5c980d5.png`,
          i3: `../image/Kaneki/tumblr_997b39b25d43a9b1dbbc075ec99f851d_f453b019_540.png`
        } 
        },
        {
        id: 5,
        name: "Kirishima",
        age: 20,
        kage: 16,
        type: "Color",
        height: 164,
        keight: "170cm",
        rent: "R20 000",
        img: {
          i1: `../image/Kirishima/images.png`,
          i2: `../image/Kirishima/8e09c1011155726c43cbdee2c959ff67.png`,
          i3: `../image/Kirishima/1-6.png`
        }
        },
        {
        id: 6,
        name: "Yukio",
        age: 20,
        kage: 16,
        type: "Black",
        height: 179,
        keight: "180cm",
        rent: "R20 000",
        img: {
          i1: `../image/Yukio/93ddc13af163410d68fbe81c1375a60b.png`,
          i2: `../image/Yukio/afecd5418a9200a4144bfc311ce6a018.png`,
          i3: `../image/Yukio/d190d901c3a20e85b03b2b68d8fdcf13.png` 
        }
        },        
        {
        id: 7,
        name: "Nishinoya",
        age: 20,
        kage: 17,
        type: "Black",
        height: 150,
        keight: "160.5cm",
        rent: "R20 000",
        img: {
          i1: `../image/Nishinoya/1ba63c1da84122ab3b8390b001e41444.jpg`,
          i2: `../image/Nishinoya/3gwzdk797lu41.png`,
          i3: `../image/Nishinoya/ESqqYHfU0AA3Kvy.jpg`
        } 
        },
        {
        id: 8,
        name: "Shoto",
        age: 20,
        kage: 15,
        type: "Color",
        height: 164,
        keight: "176cm",
        rent: "R20 000" ,
        img: {
          i1: `../image/Shoto/avatars-LH92hC7SFmybsuap-ChJvVg-t500x500.png`,
          i2: `../image/Shoto/todoroki-aesthetic-paint-by-number.png`,
          i3: `../image/Shoto/tumblr_1711073978ca1c053c4b2765ac6da1e1_b16f2d85_500.png`
        } 
        },
        {
        id: 9,
        name: "Sugawara",
        age: 20,
        kage: 18,
        type: "Color",
        height: 164,
        keight: "174.6cm",
        rent: "R10 000" ,
        img: {
          i1: `../image/Suga/2a78219ca8e01168f096fd8df0eafe52.png`,
          i2: `../image/Suga/50362ff575af32cb8788fa439d596c5a.png`,
          i3: `../image/Suga/9mur10si4si71.png` 
        }
        },  
        {
        id: 10,
        name: "Tsukishima",
        age: 20,
        kage: 16,
        type: "Blondes",
        height: 179,
        keight: "190cm",
        rent: "R10 000",
        img:{
          i1: `../image/Suki/58c5b6407882d509a585f6dc87b3b3a3.png`,
          i2: `../image/Suki/a5316678db52a5c440c01bdcf3634e00.png`,
          i3: `../image/Suki/8e45e1ceaa57a2fef953d03334d23c72.png`  
        } 
        },
        {
        id: 11,
        name: "Sukuna",
        age: 1000,
        kage: "1000+",
        type: "Color",
        height: 164,
        keight: "173cm",
        rent: "R30 000",
        img:{
          i1: `../image/Sukuna/ef9d37c43b7ab6bc634199dc7a099e8f.png`,
          i2: `../image/Sukuna/Ex1iSQJXEAgvMGp.png`,
          i3: `../image/Sukuna/tumblr_af43b225500e5ad5a6a076c200e8553c_fb439d14_1280.png`
        }  
        },
        {
        id: 12,
        name: "Tanaka",
        age: 20,
        kage: 17,
        type: "Black",
        height: 164,
        keight: "178cm",
        rent: "R30 000",
        img: {
          i1: `../image/Tanaka/270325f541e8fdb62b0ecb62ec95ea44.png`,
          i2: `../image/Tanaka/5f84d22ec5d8fb7e5146db3f3aef0fa4.png`,
          i3: `../image/Tanaka/tumblr_pqmho5l8U91wzzbau_1280.png`,
        }   
        }
    ];
  
   
  
  function loadData() {
    let display = document.getElementById("tbody");
    display.innerHTML = "";
    anime.forEach((item, index) => {
      display.innerHTML += `
      <tr>
      <th scope="row">${item.id}</th>
      <td>${item.name}</td>
      <td>${item.kage}</td>
      <td>${item.keight}</td>
      <!-- icons -->
      <td>
      <!-- Update -->
      <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#update${index}"><i class="fa-solid fa-pen-to-square"></i></a>
      
      <!-- Delete -->
      <a class="btn" id="delete" onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can"></i></a>
      </td>
      </tr>
      <!-- Modal -->
      <div class="modal modal-xl fade" id="update${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
              <button type="button" class="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          <div class="modal-body">
          <div class="row-6">
          <div class="col-3">
              <!-- Name -->
                  <div class="mb-3">
                      <label for="editName${index}" class="form-label">Name</label>
                      <input class="form-control" type="text"
                      name="editName${index}"
                      id="editName${index}"
                      value="${item.name}"/>
                  </div>
      
              <!-- Age -->
                  <div class="mb-3">
                      <label for="editAge${index}" class="form-label">Age Range</label>
                      <input class="form-control" type="text"
                      name="editAge${index}"
                      id="editAge${index}"
                      value="${item.age}"/>
                  </div>  
                  <div class="mb-3">
                      <label for="editKage${index}" class="form-label">Age</label>
                      <input class="form-control" type="text"
                      name="editKage${index}"
                      id="editKage${index}"
                      value="${item.kage}"/>
                  </div>    

      
              <!-- Height -->
                  <div class="mb-3">
                      <label for="editHeight${index}" class="form-label">Height Range</label>
                      <input class="form-control" type="text"
                      name="editHeight${index}"
                      id="editHeight${index}"
                      value="${item.height}"/>
                  </div>
                  <div class="mb-3">
                      <label for="editKeight${index}" class="form-label">Height</label>
                      <input class="form-control" type="text"
                      name="editKeight${index}"
                      id="editKeight${index}"
                      value="${item.keight}"/>
                  </div>
      
              <!-- Img -->
                  <div class="mb-3">
                      <label for="editImg${index}" class="form-label">Images</label>
                      <input class="form-control" type="text"
                      name="editImg${index}"
                      id="editImg${index}"
                      value="${item.img}"/>
                  </div>
              
              <!-- Type -->
                  <div class="mb-3">
                      <label for="editType${index}" class="form-label">Boy Types</label>
                      <input class="form-control" type="text"
                      name="editType${index}"
                      id="editType${index}"
                      value="${item.type}"/>
                  </div>
                  
                  <!-- Rent -->
                  <div class="mb-3">
                      <label for="editRent${index}" class="form-label">Rent Price</label>
                      <input class="form-control" type="text"
                      name="editRent${index}"
                      id="editrent${index}"
                      value="${item.rent}"/>
                  </div>
              </div>
            </div> 
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger data-bs-dismiss="modal">Close</button>
              <button type="button" onclick="updateanime(${index})" class="btn btn-danger data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  }
  loadData();
  
  // Add
  function addItem() {
    // e.preventDefault();
    anime.push(
        {
            id: anime.length + 1,
            name: document.querySelector('#addName').value,
            kage: document.querySelector('#addKage').value,
            age: document.querySelector('#addAge').value,
            height: document.querySelector('#addSize').value,
            keight: document.querySelector('#addKeight').value,
            img: document.querySelector('#addImg').value,
            type: document.querySelector('#addboys').value,
            rent: document.querySelector('#addRent').value,
        }
    )
    localStorage.setItem("anime", JSON.stringify(anime));
    loadData();
  }

  function sortName() {
    console.log('Hello')
    let direction = document.querySelector("#sortName").value;
    let sortedarray = anime.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    if (direction == "descending") sortedarray.reverse();
    console.log(sortedarray);
    loadData(anime);
  }

  
  // UPDATE
  function updateAnime(id) {
    let name = document.getElementById(`editName${id}`).value
    let kage = document.getElementById(`editKage${id}`).value
    let age = document.getElementById(`editAge${id}`).value
    let keight = document.getElementById(`editKeight${id}`).value
    let height = document.getElementById(`editSize${id}`).value
    let img = document.getElementById(`editImg${id}`).value
    let type = document.getElementById(`editboys${id}`).value
    let rent = document.getElementById(`editRent${id}`).value
  
    anime[id] = ({
      name,
      kage,
      age,
      keight,
      height,
      img,
      type,
      rent
    })
    localStorage.setItem("anime", JSON.stringify(anime));
    loadData()
  }
  
  // DELETE
  function deleteItem(id) {
    if (id > -1) {
        anime.splice(id, 1);
      localStorage.setItem("anime", JSON.stringify(anime));
    }
    loadData();
  }
//   document.getElementById('delete').addEventListener('click', deleteItem)