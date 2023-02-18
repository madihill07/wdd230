/*Steps: */

    // 1. Create a fetch, to get data from a previously made JSON File 

    getURL = ''

    // Creates a function to get the items of the JSON File  
    async function getItems(getURL) {
        let x = window.matchMedia("min-width: 729px && max-width: 1024px")
        
        const response = await fetch(getURL);
        console.log(response);
        
        
        
        
        
    // Always include this response
    if(response.ok) {
        // Do all the stuff with JavaScript
        const jsObject = await response.json()
        console.log(jsObject)
        const businessDirectory = jsObject['companies']
        // Create two event listeners for each button that was created
        let cardButton = document.getElementById('card_view_button')
        let tableButton = document.getElementById('list_view_button')
        let generalListElement = document.querySelector('.business_cards')
        let tableListElement = document.querySelector('.business_tables')
    
    // Fetch the json data to show on startup
    if(x.matches) {
        businessDirectory.forEach(element => {
            let tableElement = document.createElement('table')
            let tableRow = document.createElement('tr')
            let tableData = document.createElement('td')
        
    
            tableListElement.appendChild(tableElement)
            tableElement.appendChild(tableData)
    
            tableData.innerHTML = element.name + ' '  + element.address + ' ' + element.telephone + ' ' + element.URL; 
        })
    
            
    }
    
    else {
        
        let divCard = document.createElement('div')
        divCard.setAttribute('class','business_card')
        let itemURL = document.createElement('a')
        let itemImage = document.createElement('img')
        let itemName = document.createElement('h1')
        let itemAddress = document.createElement('p')
        let itemTelephone = document.createElement('p')
    
    
    businessDirectory.forEach(element => {
        let divCard = document.createElement('div')
        divCard.setAttribute('class','business_card')
        let itemURL = document.createElement('a')
        let itemImage = document.createElement('img')
        let itemName = document.createElement('h1')
        let itemAddress = document.createElement('p')
        let itemTelephone = document.createElement('p')
       
    
        generalListElement.appendChild(divCard)
        divCard.appendChild(itemImage)
        divCard.appendChild(itemName)
        divCard.appendChild(itemAddress)
        divCard.appendChild(itemTelephone)
        divCard.appendChild(itemURL)
        
        itemImage.setAttribute('src',element.img)
        itemImage.setAttribute('alt',"Alternative Text for the Image")
        itemName.innerHTML = element.name;
        itemAddress.innerHTML = element.address;
        itemTelephone.innerHTML = element.telephone;
        itemURL.setAttribute('href',element.URL);
        itemURL.setAttribute('target','_blank');
        itemURL.innerHTML = element.URL;
        
    }); 
    }
    
    
    
    
    
    
    
    cardButton.addEventListener("click",showCards);
    tableButton.addEventListener("click",showTables);
    
    
    
        // Create a function to display the businesses in card view
        function showCards() {
                console.log('This Function Works')
                let tableRow = document.querySelectorAll('table')
                tableRow.forEach((item) => {
                    item.remove();
                })
    
                businessDirectory.forEach(element => {
                    let divCard = document.createElement('div')
                    divCard.setAttribute('class','business_card')
                    let itemURL = document.createElement('a')
                    let itemImage = document.createElement('img')
                    let itemName = document.createElement('h3')
                    let itemAddress = document.createElement('p')
                    let itemTelephone = document.createElement('p')
                   
                
                    generalListElement.appendChild(divCard)
                    divCard.appendChild(itemImage)
                    divCard.appendChild(itemName)
                    divCard.appendChild(itemAddress)
                    divCard.appendChild(itemTelephone)
                    divCard.appendChild(itemURL)
                    
                    itemImage.setAttribute('src',element.img)
                    itemImage.setAttribute('alt',"Alternative Text for the Image")
                    itemName.innerHTML = element.name;
                    itemAddress.innerHTML = element.address;
                    itemTelephone.innerHTML = element.telephone;
                    itemURL.setAttribute('href',element.URL);
                    itemURL.setAttribute('target','_blank');
                    itemURL.innerHTML = element.URL;
                    
                }); 
           
            }
    
        
             // Create a function to display the businesses in table view
             function showTables() {
                console.log('This Function also works')
                // generalListElement.classList.remove('business_cards')
                // generalListElement.classList.add('business_lists')
                let cardElements = document.querySelectorAll('.business_card')
                cardElements.forEach((item) => {
                    item.remove();
                })
    
                businessDirectory.forEach(element => {
                    let tableElement = document.createElement('table')
                    let tableRow = document.createElement('tr')
                    let tableData = document.createElement('td')
                
    
                    tableListElement.appendChild(tableElement)
                    tableElement.appendChild(tableData)
    
                    tableData.innerHTML = element.name + ' '  + element.address + ' ' + element.telephone + ' ' + element.URL;  
    
                })
    
                  
    
    
                
        
            }
        } // Ends the if(ok) thingy
        
       
    
    
    
        
    }; // This ends the large async function
    
    // We call the large async function
    
    getItems(getURL);