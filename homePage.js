// async function getNewCar(renderNewCar) {
//     const response = await fetch("http://localhost:8080/api/cars")
//     console.log(response)
//     const data = await response.json()
//     const slice = data.slice(0,3)
//     console.log(data.name)
//         slice.forEach(carNew => {
//           console.log(carNew.name)
//           document.getElementById('carNew').innerHTML += 
//           `
//             <div class="card col-4 border shadow-0">
//             <img
//               src="https://car-data.carwow.co.uk/image?filter[brand_slug]=lexus&filter[model_review_slug]=lc-convertible-2020&filter[angle]=front"
//               class="card-img-top" alt="Fissure in Sandstone" />
//             <p class="d-flex justify-content-center">${carNew.name}</p><br>
//             <p class="d-flex justify-content-center" style="margin-top: -30px">$ ${carNew.price}</p>
//           </div>
//             `
//         })
// }
// getNewCar()


