let anime = [
    {
    name: "Bakugo",
    age: 15,
    height: "172cm",
    img: {
      i1: `../image/Bakugo/main-qimg-8082d2ae2288d27a1f8cdbfbb1b1a33e-lq.png`,
      i2: `../image/Bakugo/ndzjkqgl424a.png`,
      i3: `../image/Bakugo/uMF4Hizp_400x400.png`
    }  
    },
    {
    name: "Ban",
    age: "stuck in the age of 34",
    height: "210cm",
    img: {
      i1: `../image/Ban/Ban_breaking_out_of_his_cell2.png`,
      i2: `../image/Ban/cf92aca6cbbd491282e769ea3ae9f9c7.png`,
      i3: `../image/Ban/uwp1188980.png`
    } 
    },
    {
    name: "Kageyama",
    age: 16,
    height: "182cm",
    img: {
      i1: `../image/Kageyama/anime-cute-haikyuu-kageyama-tobio-Favim.com-4983630.png`,
      i2: `../image/Kageyama/EVVcCk9UMAEMvkS.png`,
      i3: `../image/Kageyama/uj6JyKmL_400x400.png`
    } 
    },
    {
    name: "Kaneki",
    age: 22,
    height: "170m",
    img: {
      i1: `../image/Kaneki/artworks-000334148184-91h2rn-t500x500.png`,
      i2: `../image/Kaneki/C00f0b1cdb6b673c067c249fb5c980d5.png`,
      i3: `../image/Kaneki/tumblr_997b39b25d43a9b1dbbc075ec99f851d_f453b019_540.png`
    } 
    },
    {
    name: "Kirishima",
    age: 16,
    height: "170cm",
    img: {
      i1: `../image/Kirishima/images.png`,
      i2: `../image/Kirishima/8e09c1011155726c43cbdee2c959ff67.png`,
      i3: `../image/Kirishima/1-6.png`
    }
    },
    {
    name: "Yukio",
    age: 16,
    height: "180cm",
    img: {
      i1: `../image/Yukio/93ddc13af163410d68fbe81c1375a60b.png`,
      i2: `../image/Yukio/afecd5418a9200a4144bfc311ce6a018.png`,
      i3: `../image/Yukio/d190d901c3a20e85b03b2b68d8fdcf13.png` 
    }
    },        
    {
    name: "Nishinoya",
    age: 17,
    height: "160.5cm",
    img: {
      i1: `../image/Nishinoya/1ba63c1da84122ab3b8390b001e41444.jpg`,
      i2: `../image/Nishinoya/3gwzdk797lu41.png`,
      i3: `../image/Nishinoya/ESqqYHfU0AA3Kvy.jpg`
    } 
    },
    {
    name: "Shoto",
    age: 15,
    height: "176cm",
    img: {
      i1: `../image/Shoto/avatars-LH92hC7SFmybsuap-ChJvVg-t500x500.png`,
      i2: `../image/Shoto/todoroki-aesthetic-paint-by-number.png`,
      i3: `../image/Shoto/tumblr_1711073978ca1c053c4b2765ac6da1e1_b16f2d85_500.png`
    } 
    },
    {
    name: "Sugawara",
    age: 18,
    height: "174.6cm",
    img: {
      i1: `../image/Suga/2a78219ca8e01168f096fd8df0eafe52.png`,
      i2: `../image/Suga/50362ff575af32cb8788fa439d596c5a.png`,
      i3: `../image/Suga/9mur10si4si71.png` 
    }
    },  
    {
    name: "Tsukishima",
    age: 16,
    height: "190cm",
    img:{
      i1: `../image/Suki/58c5b6407882d509a585f6dc87b3b3a3.png`,
      i2: `../image/Suki/a5316678db52a5c440c01bdcf3634e00.png`,
      i3: `../image/Suki/8e45e1ceaa57a2fef953d03334d23c72.png`  
    } 
    },
    {
    name: "Sukuna",
    age: "1000+",
    height: "173cm",
    img:{
      i1: `../image/Sukuna/ef9d37c43b7ab6bc634199dc7a099e8f.png`,
      i2: `../image/Sukuna/Ex1iSQJXEAgvMGp.png`,
      i3: `../image/Sukuna/tumblr_af43b225500e5ad5a6a076c200e8553c_fb439d14_1280.png`
    }  
    },
    {
    name: "Tanaka",
    age: 17,
    height: "178cm",
    img: {
      i1: `../image/Tanaka/270325f541e8fdb62b0ecb62ec95ea44.png`,
      i2: `../image/Tanaka/5f84d22ec5d8fb7e5146db3f3aef0fa4.png`,
      i3: `../image/Tanaka/tumblr_pqmho5l8U91wzzbau_1280.png`,
    }   
    }
];

let boys = document.getElementById("Boys")
anime.forEach((item, index) => {
    boys.innerHTML += `
    <div class="card p-3 m-3 mx-auto justify-center" style="height:400px; width:400px;">
      <img src="${item.img.i1}" class="card-img-top" style="height:300px; width:300px;">
      <div class="card-body">
        <p class="card-text">Name: ${item.name}</p>
        <h5 class="card-title">Age: ${item.age}</h5>
        <button class="btn btn-primary">${item.height}</button>
          <div>
          </div>
      </div>
    </div>
      `;
  });