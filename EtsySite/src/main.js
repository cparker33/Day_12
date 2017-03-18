$(document).ready(function() {

  var itemList = [];

  var itemDispCount = 18 // ?

  var cSrchResult = []


//##########################
//####################
// SCRIBE
//##########

  var scribeItem = (function() {

    this.id = ""

    this.lstItm_img = ""
    this.lstItm_title = ""
    this.lstItm_itmurl = ""
    this.lstItm_price = ""
    this.lstItm_shop = ""


    this.scrbCont = (function(i) {
    

      this.id = 'liCont' + i

        // onclick="location.href='${this.lstItm_itmurl}'"
      var appendStr = (`
        
          <div id="${this.id}" class="cItemCont" onclick="location.href='${this.lstItm_itmurl}'">

            <img class="cItemImg" src="${this.lstItm_img}">

            <div class="cItemTitle">${this.lstItm_title}</div>

            <div class="cShpPrcCont">

              <div class="cItemStore">${this.lstItm_shop}</div>

              <div class="cItemCost">${this.lstItm_price}</div>

            </div>

          </div>
        
      `)


      $('#cMidItemList').append(appendStr)
      //scrb
    })
    // obj
  })



  $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data) {

      for (var i = 0; i < data.results.length; i += 1) {
        
        cSrchResult.push(data.results[i])
      }

      console.log(cSrchResult)

      addItems()

  // Etsy JSON
  })
  // Etsy JSON



  function addItems() {

      for (var a = 0; a < itemDispCount; a += 1) {

        var newItem = new scribeItem()

        //images

        cSrchResult[a].Images.forEach(function(img){

          if (img.rank === 1) {

            newItem.lstItm_img = img.url_fullxfull
          

          }

        }) 


        newItem.lstItm_title = cSrchResult[a].Shop.title

        newItem.lstItm_itmurl = cSrchResult[a].url

        newItem.lstItm_price = `$${cSrchResult[a].price}`

        newItem.lstItm_shop = cSrchResult[a].Shop.shop_name
        

        // console.log(newItem)

        // console.log(cSrchResult[a].Shop.shop_name, + ` $${cSrchResult[a].price}`)

        

        if (cSrchResult[a].Shop.title !== null && cSrchResult[a].Shop.title !== '') {

          newItem.scrbCont()

        } else {

          itemDispCount += 1

        }


      } // FOR ( A )


      console.log("End")

    }





  

  //!!
})