let $finance = $('#finance')
let $home = $('#main-content')
let $advisors = $('#advisors')

$home.show()
$finance.hide()
$advisors.hide()

$('#home-nav').on('click', () => {
  $home.show()
  $finance.hide()
  $advisors.hide()
})

$('#finance-nav').on('click', () => {
  $home.hide()
  $finance.show()
  $advisors.hide()
})

$('#advisor-nav').on('click', () => {
  $home.hide()
  $finance.hide()
  $advisors.show()
})
