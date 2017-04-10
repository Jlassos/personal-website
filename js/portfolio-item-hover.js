var portfolio = {
  A: {
    githubLink: 'https://github.com/Jlassos/box-buddy',
    header: 'Box Buddy',
    subheader: 'Virtual Pet',
    imageSrc: '/img/box-buddy.png',
    description: 'A little virtual pet simulation he lives in a box and he is your buddy!',
    details: [
      ' Javascript',
      ' Phaser JS framework',
      ' Photoshop',
      ' Audcacity'
    ]
  },
  B: {
    githubLink: 'https://github.com/Jlassos/red-rover',
    header: 'Red Rover',
    subheader: 'Application',
    imageSrc: '/img/rr-mark-red.png',
    description: 'I coded CSS framework for this startups app',
    details: [
      ' HTML',
      ' CSS',
      ' Javascript',
      ' SASS',
      ' Node',
    ]
  }
}

var showProject = function (projectData) {
  var $display = document.querySelector('.display')

  var $image = $display.querySelector('.img-responsive')
  var $header = document.querySelector('.item-header')
  var $description = document.querySelector('.description')
  var $details = document.querySelector('.details')
  var $button = document.querySelector('.githubLink')

  $image.src = projectData.imageSrc
  $header.innerText = projectData.header
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