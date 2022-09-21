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

        if (selectionName =='Main CTA') {
          tips =
            '<h3>Tips</h3>'+
            '<p>1- This elements is the main action users need to take</p>' +
            '<p>2- It should be the most visible element on the page and always show above the fold</p>'
        }
        else if (selectionName =='Reassurance elements section') {
          tips =
            '<h3>Tips</h3>' +
            '<p>1- Key section to explain payment methods, delivery and services</p>' + 
            '<p>2- It should be interactive and provide further detail</p>' +
            '<p>3- Make sure to open a pop-in to avoid driving users away from the checkout</p>'
        }
        else if (selectionName =='Progress bar') {
          tips =
            '<h3>Tips</h3>' +
            '<p>This elements guides users throughout the process, it should be interactive, allowing for hesitation</p>'
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