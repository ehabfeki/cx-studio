figma.showUI(__html__);

figma.ui.resize(480, 500)

let tips = '';
let metrics = {
  passRate: "70%",
  conversionRate: "35%",
  exposureRate: "99.99%",
  exitRate: "15%",
  timeBeforeFirstAction: "6s",
  loadingTimeStandards: "2.5s",
};
let data = getDataHtml(metrics);
let metadata = '';

function getDataHtml(metrics) {
  return '<span class="metrics">' +
              '<p class="metric">Pass Rate: <span class="metric-value">'+metrics.passRate+'</span></p>' +
              '<p class="metric">Conversion Rate:   <span class="metric-value">'+metrics.conversionRate+'</span></p>' +
              '<p class="metric">Exposure Rate:   <span class="metric-value">'+metrics.exposureRate+'</span></p>' +
              '<p class="metric">Exit Rate:   <span class="metric-value">'+metrics.exitRate+'</span></p>' +
              '<p class="metric">Time Before First Action:   <span class="metric-value">'+metrics.timeBeforeFirstAction+'</span></p>' +
              '<p class="metric">Loading Time Standards:   <span class="metric-value">'+metrics.loadingTimeStandards+'</span></p>' +
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
            '<p>2/ With our experience we can say <span class="metric-value">'+metrics.passRate+'%</span> of users select this option first</p>';
        }
        else if (selectionName =='First option delivery') {
          tips =
          '<h3>Tips</h3>'+
            '<p>1/ It\'s important to display this delivery option at the first place to encourage client to select it</p>'+
            '<p>2/ With our experience we can say <span class="metric-value">'+metrics.passRate+'%</span> of users select this option first</p>';
        }
        else if (selectionName =='Second option delivery') {
          tips =
            '<h3>Tips/infos</h3>'+
              '<p>2/ With our experience we can say the second option of delivery are selected by <span class="metric-value">'+metrics.passRate+'%</span></p>'
        }
        else if (selectionName =='Third option delivery') {
          tips =
            '<h3>Tips/infos</h3>'+
            '<p>2/ With our experience we can say the third option of delivery are selected by <span class="metric-value">'+metrics.passRate+'</span>%</p>'
        }
        else if (selectionName =='Recap column') {
          tips =
            '<h3>Tips/infos</h3>'+
            '<p>2/ With our experience we can say the third option of delivery are selected by <span class="metric-value">'+metrics.passRate+'</span>%</p>'
        }
        else {
          tips = ''
        }

        metadata = tips + data;
        sendMetadata(metadata)
    }
})

function sendMetadata(metadata) {
  figma.ui.postMessage({
    type: 'selectionChange',
    metadata,
  })
}