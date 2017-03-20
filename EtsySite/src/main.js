$(document).ready(function() {

  var itemList = [];

  var itemDispCount = 24 // ?  48

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
        
          <div class="cItemCont">

            <div class="cItemContInner" onclick="location.href='${this.lstItm_itmurl}'">

              <img class="cItemImg" src="${this.lstItm_img}">

              <div class="cItemTitle">${this.lstItm_title}</div>

            

              <div class="cShpPrcCont">

                <div class="cItemStore">${this.lstItm_shop}</div>

                <div class="cItemCost">${this.lstItm_price}</div>

              </div>


            </div>

            <div class="cItemHoverMenu">

              <div class="cHambBtn" onclick="signUpFunction()">

                <div class="cHamb"><i class="fa fa-bars" aria-hidden="true"></i></div>
                <div class="cArr"><i class="fa fa-sort-desc" aria-hidden="true"></i></div>
                                
              </div>

              <div class="cHeart" onclick="makeFavFunction()"><i class="fa fa-heart" aria-hidden="true"></i></div>

              

            </div>

          </div>
        
      `)


      $('#cMidItemList').append(appendStr)
      //scrb
    })
    // obj
  })

//##########################
//####################


  $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=Mississippi&includes=Images,Shop&callback=?', function(data) {


    console.log(data)
    // console.log(data.results.length)
    console.log(data.results.length)

      for (var i = 0; i < data.results.length; i += 1) {
        
        cSrchResult.push(data.results[i])
      }

      // console.log(cSrchResult)

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
        


        // if (cSrchResult[a].Shop.title !== null && cSrchResult[a].Shop.title !== '') {

          newItem.scrbCont()

        


      } // FOR ( A )


      console.log("End")

    }





  

  //!!
})