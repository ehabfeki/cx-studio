figma.showUI(__html__);

figma.ui.resize(480, 500)

let tips = '';
let metrics = {
  TimeBeforeFirstTap: Math.random() * 2,
  TapRate: Math.random() * 4,
  NumberTap: Math.random() * 5,
  AttractivenessRate: Math.random() * 3,
  exposureRate: Math.random() * 2,
  exposureTime: Math.random() * 5,
};
let data = getDataHtml(metrics);
let metadata = '';

function getDataHtml(metrics) {
  return '<span class="metrics">' +
              '<p class="metric">Time before first Tap: <span class="metric-value">'+metrics.TimeBeforeFirstTap+'s</span></p>' +
              '<p class="metric">Tap Rate:   <span class="metric-value">'+metrics.TapRate+'%</span></p>' +
              '<p class="metric">Number Tap:   <span class="metric-value">'+metrics.NumberTap+'</span></p>' +
              '<p class="metric">Attractiveness Rate:   <span class="metric-value">'+metrics.AttractivenessRate+'%</span></p>' +
              '<p class="metric">Exposure Rate:   <span class="metric-value">'+metrics.exposureRate+'%</span></p>' +
              '<p class="metric">Exposure Time:   <span class="metric-value">'+metrics.exposureTime+'s</span></p>' +
            '</span>'
}

figma.on('selectionchange', () => {
    if(figma.currentPage.selection.length > 0) {

        const selection = figma.currentPage.selection
        console.log("::::DEBUG::::SELECTION", selection)

        const selectionName = selection[0].name;

        if (selectionName =='Hi FI') {
          tips =
            '<h3>Tips</h3>'+
            '<p>1/ It\'s more likely if you change the font size and colors of the prices it will be more noticeable</p>'
            '<p>2/ With our experience we can say <span class="metric-value">'+metrics.TapRate+'%</span> of users select this option first</p>';
        }
        if (selectionName =='First option delivery') {
          tips =
          '<h3>Tips</h3>'+
            '<p>1/ It\'s important to display this delivery option at the first place to encourage client to select it</p>'+
            '<p>2/ With our experience we can say <span class="metric-value">'+metrics.TapRate+'%</span> of users select this option first</p>';
        }
        if (selectionName =='Second option delivery') {
          tips =
            '<h3>Tips/infos</h3>'+
              '<p>2/ With our experience we can say the second option of delivery are selected by <span class="metric-value">'+metrics.TapRate+'%</span></p>'
        }
        if (selectionName =='Third option delivery') {
          tips =
            '<h3>Tips/infos</h3>'+
            '<p>2/ With our experience we can say the third option of delivery are selected by <span class="metric-value">'+metrics.TapRate+'</span>%</p>'
        }
        if (selectionName =='Recap column') {
          tips =
            '<h3>Tips/infos</h3>'+
            '<p>2/ With our experience we can say the third option of delivery are selected by <span class="metric-value">'+metrics.TapRate+'</span>%</p>'
        }
        else {
          tips = ''
        }

        metadata = tips + data;
        sendMetadata(metadata)
        // tips = ''
        // data = ''
        // metrics = ''
        // metadata = ''
    }
    // else {
    //     console.log("You have to select a layer!")
    // }
})

function sendMetadata(metadata) {
  figma.ui.postMessage({
    type: 'selectionChange',
    metadata,
  })
}