var portfolio = {
  A: {
    githubLink: 'https://github.com/Jlassos/box-buddy',
    imageSrc: '/img/box-buddy.png',
    description: 'This is so rad, just look at me killin it!',
    details: [
      'Go read the code, lazy bum...',
      'I used high technology that usually only adults can reach.'
    ]
  },
  B: {
    imageSrc: '/img/rr-mark-red.png',
    description: 'Also did this, I know, so rad.',
    details: [
      'gummy bears',
      'potato chips',
      'unhealthy arguments'
    ]
  }
}

var showProject = function (projectData) {
  var $display = document.querySelector('.display')

  var $image = $display.querySelector('.img-responsive')
  var $description = $display.querySelector('.description')
  var $details = $display.querySelector('.details')
  var $button = $display.querySelector('a')

  $image.src = projectData.imageSrc
  $description.innerText = projectData.description
  $details.innerText = projectData.details
  $button.href = projectData.githubLink
}

// initial project loaded
showProject(portfolio.A)

var $thumbs = document.querySelectorAll('.thumb')

var handleThumbHover = function (e) {
  var project = e.target.getAttribute('data-project')
  showProject(portfolio[project])
}

$thumbs.forEach(function (node) {
  node.addEventListener('mouseenter', handleThumbHover)
})

console.log($thumbs)