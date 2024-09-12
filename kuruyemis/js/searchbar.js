const productList = document.querySelector("#cards");
const search = document.querySelector(".form-control");
console.log(search);
const products = [
    {
        img: '/kuruyemis/resimler/bademnew.jpg',
        productname: "Badem",
        price: "450 TL",
    }
    , {
        img: '/kuruyemis/resimler/ceviz.jpg',
        productname: "Ceviz",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/fıstık.jpg',
        productname: " Antep Fıstığı",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/fındık.jpg',
        productname: "Fındık",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/karısık.jpg',
        productname: "Karışık lüx",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/cekirdeknew.jpg',
        productname: "Siyah Çekirdek",
        price: "129 Tl",
    }, {
        img: '/kuruyemis/resimler/kabakcekirdegi.jpg',
        productname: "Kabak Çekirdeği",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/yerfistikk.jpg',
        productname: "Yer Fıstığı",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/cips-fistik-600x315.jpg',
        productname: "Cips Fıstık",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/siyahuzum.jpg',
        productname: "Siyah Üzüm",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/sarıuzum.jpg',
        productname: "Sarı Üzüm",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/ORG-soslu-misir-kg178.jpg',
        productname: "Soslu Mısır",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/ORG-cig-kaju-kg888.jpg',
        productname: "Kaju",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/sari-leblebi.jpg',
        productname: "Sarı Leblebi",
        price: "450 TL",
    }, {
        img: '/kuruyemis/resimler/beyaz-leblebi-500-gr-leblebi-taze7-63-12-B.jpg',
        productname: "Beyaz Leblebi",
        price: "450 TL",
    }









];
search.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    const searchString = e.target.value;
    const filterProducts = products.filter((product) => {
        return product.productname.toLowerCase().includes(String(searchString).toLowerCase());

    });
    displayProducts(filterProducts);



});




const displayProducts = (filterProducts) => {
    const htmlString = filterProducts
        .map((product) => {
            return `
            
            <div class="card">
            <img class="card-img-top" src=${product.img} alt="Card image cap">
            <div class="card-body">
                <h4>${product.productname} <span class="badge bg">${product.price}</span></h4>
            </div>
            </div>
        `;
        })
        .join('');
    productList.innerHTML = htmlString;
};

