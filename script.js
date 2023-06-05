const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText = "Loading..."
        animeNameEl.innerText="Updating..."
        animeImgEl.src="Spinner.svg"
        const response =await fetch("https://api.catboys.com/img");
        const data =await response.json();
        btnEl.disabled=false;
        btnEl.innerText = "Get Anime"
        animeContainerEl.style.display="block";
        animeImgEl.src=data.url;
        animeNameEl.innerText=data.artist;
    } catch (error) {
        console.log(error)
        btnEl.disabled=false;
        btnEl.innerText = "Get Anime"
        
        animeNameEl.innerText="An error happened, please try again"
    }
})
/*
Bu kodda, fetch fonksiyonu bir HTTP isteği yapar ve bir Response nesnesi döndürür. İlk await ifadesi, fetch işleminin tamamlanmasını bekler ve ardından elde edilen Response nesnesini response değişkenine atar.

Sonrasında, response üzerindeki json() yöntemi çağrılır. Bu yöntem, Response nesnesinin içeriğini JSON formatında okumak için kullanılır. İkinci await ifadesi, json() işleminin tamamlanmasını bekler ve JSON verilerini data değişkenine atar.

Bu await ifadeleri, asenkron işlemlerin sonucunu beklerken JavaScript'in diğer işlemlere devam etmesini engeller. Yani, ilgili asenkron işlem tamamlanana kadar kodun altındaki satırlar çalışmayacaktır. Bu, işlemlerin sıralı ve beklemeli bir şekilde gerçekleştirilmesini sağlar.
*/ 