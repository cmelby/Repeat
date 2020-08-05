const OUTPUT_DIV = 'output'

class HrefReporter {
  constructor(isDemo = true) {
    this._isDemo = isDemo
    this._hrefs = []

    this.addHref = this.addHref.bind(this)
    this.generateReport = this.generateReport.bind(this)  
  }

  addHref(href) {
    this._hrefs.push(href)
  }

  generateReport() {
    const summary = `There are ${this._isDemo ? '____' : this._hrefs.length} hyperlinks in this page:`
    
    const hrefsList = '<ul>' + this._hrefs.map(href => `<li>${href}</li>`).join('') + '</ul>'

    return summary + hrefsList
  }
}
function getDefaultReporter() {
  const defaultReporter = new HrefReporter()
  defaultReporter.addHref('www.example1.com')
  defaultReporter.addHref('www.example2.com')
  defaultReporter.addHref('www.example3.com')
  defaultReporter.addHref('etc...')

  return defaultReporter
}


function onLoad() {
  document.getElementById(OUTPUT_DIV).innerHTML = getDefaultReporter().generateReport()
}

function reset() {
  console.log('resetting output box...')
  onLoad()
}
function findLinks() {
  let hrefs = ['www.exampleA.com',
  'www.exampleB.com',
  'www.exampleC.com']
  const defaultReporter = new HrefReporter(false)
  for(let i = 0; i < hrefs.length; i++) {
    defaultReporter.addHref(hrefs[i]) 
  }
  document.getElementById(OUTPUT_DIV).innerHTML =
  defaultReporter.generateReport();

  console.log('finding links...')
}

document.onload = onLoad
