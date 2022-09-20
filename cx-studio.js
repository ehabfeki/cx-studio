figma.showUI(__html__);

figma.ui.resize(420, 400)

figma.on('selectionchange', () => {
    if(figma.currentPage.selection.length > 0){

        const selection = figma.currentPage.selection
        console.log("::::DEBUG::::SELECTION", selection)

        let metadata = () => {
            return {
                Average: 78,
                Popularity: 66,         
                Clickability: 88,       
                crossSellSection: 87, 
                generalAdvice: 45,     
                exitRate: 66,          
                CTA: 43, 
            }
        }

        sendMetadata(metadata)
    }
    else {
        console.log("You have to select a layer!")
    }
})

function sendMetadata(metadata) {
  figma.ui.postMessage({
    type: 'selectionChange',
    metadata,
  })
}