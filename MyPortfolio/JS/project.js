const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const projectDetails = {
    btn1: {
        title: "Image To Image Generation",
        description: `
        <b>Description :</b> <br>
            Generative Adversarial Networks (GANs) were introduced by Ian Goodfellow. 
            GANs consist of two neural networks: <b>The Generator and the Discriminator</b>, which work in an adversarial (opposite) manner.

            The Generator takes random noisy data as input and generates images.
            The Discriminator is trained on real data and is responsible for distinguishing between real and fake images.
            GANs are incredibly powerful and can be used in various applications, such as text-to-speech translation and generating high-quality images.
            In our project, we implemented Deep Convolutional GANs (DCGANs) to generate realistic images. We utilized the CelebA and CelebB datasets and achieved high-resolution, quality images after making several improvements to our model.
        `,

        
        imageUrl: "https://editor.analyticsvidhya.com/uploads/393951_t78gwhhw-hn1CgXc1K89wA.png"
    },
    btn2: {
        title: "E-Commerce Website",
        description: `
            Developed a dynamic and user-friendly e-commerce website featuring essential functionalities such as product browsing, search filters, and a secure shopping cart. 
            Key features include:<br>
           
            Technologies used: HTML, CSS, JavaScript, Node.js, Express, and MongoDB for database management. The project emphasizes scalability and seamless user experience.
        `,
        imageUrl: "https://example.com/ecommerce-image.jpg"
    },
    btn3: {
        title: "Weather App",
        description: `
            Built a Weather forecasting app using APIs for real-time data retrieval.
            The app provides current weather conditions, a 7-day forecast, and weather alerts. Users can search for any city and receive accurate weather updates, along with intuitive visual icons representing weather conditions. Developed using HTML, CSS, JavaScript, and the OpenWeatherMap API.

            
        `,
        
        imageUrl :  "Images/weather.png" 
    }
};

function createPopup(details) {
    const popupHTML = `
    <div class="popup-overlay" id="popup">
        <div class="Inner_Div1">
            <h1>Title: ${details.title}</h1>
            <p class="para1">${details.description}</p>
            <img src="${details.imageUrl}" alt="img" width=200px height="100" class="img1"><br>
            <button id="closePopup">Close</button>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    closePopup.addEventListener("click", () => popup.remove());
    window.addEventListener("click", (e) => {
        if (e.target === popup) popup.remove();
    });
}

[btn1, btn2, btn3].forEach((btn, index) => {
    if (btn) {
        btn.addEventListener("click", () => {
            const key = `btn${index + 1}`;
            createPopup(projectDetails[key]);
        });
    }
});
