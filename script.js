import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const content = document.querySelector('#content')
const image = document.querySelector('#image')
const title = document.querySelector('#title')
const description = document.querySelector('#description')


window.fetchSmth = async () => {
  content.style.display = 'none'
  image.src = ''
  title.innerText = ''
  description.innerText = ''

  const randomPage = Math.floor(Math.random() * 500) + 1
  const randomMovie = Math.floor(Math.random() * 20)
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${randomPage}`)
  const data = await response.json()

  if (data.success === false) {
    content.style.display = 'flex'
    content.style.alignItems = 'center'
    image.src = './assets/404.png'
    title.innerText = 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀'
    description.innerText = ''
    description.style.display = 'none'
    return
  }

  const movie = data.results[randomMovie]

  const descriptionText = movie.overview
  const titleText = movie.title
  const imageSrc = `${IMG_URL}${movie.poster_path}`

  content.style.display = 'flex'
  image.src = imageSrc
  title.innerText = titleText
  description.innerText = descriptionText
}