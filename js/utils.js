class Utils{
   
   
   
    static faireListHTML(list) {
        this.html = "";
    

        let html = `<div class="row faire-list-row">`
       
        for (let i = 0; i < list.length; i++)
        {
        html += `<div class="col-lg-10 faire-list-box">    
                        <div class="card-box bg-info">
                            <div class="inner">
                                <h3> ${list[i].Name} </h3>
                                <p> 
                                    <div class="row">
                                        <div class="col-sm-2">
                                            ${list[i].Location}
                                        </div>
                                        <div class="col-sm-2">
                                            ${list[i].Dates}
                                        </div>
                                    </div> 
                                </p>
                            </div>
                            
                            
                            <a class="card-box-footer bg-primary" id="faire-id-${list[i].id}" >View More <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                   </div>`;
        }
      
  
  
        html += `</div>`
     return html;
    }

    static singleFairePage(data){
        let faire = data.selectedFaire;
        console.log(faire);

        let html = 
        `
        <div class="row">
        <div class="col-lg-11    faire-box">    
            
                <div class="card-box bg-info">
                <div class="col">
                    <img src="./assets/faireimgs/${faire.Images[0]}" class="faire-img-1">
                </div>
                <div class="col">
               
                    <div class="inner faire-data">

                        <h3> ${faire.Name} </h3>
                        <p> 
                            <div class="row">
                                <div class="col-sm-6">
                                    <span class="faire-loc">${faire.Location}</span>  |  ${faire.Dates}
                                </div>
                            </div> 

                            <p>Theme/Setting: ${faire.Theme}</p>
                            <a href="${faire.Website}" class="faire-site-link">Website</a>
                            </div>
                        </p>

                    
                    </div>

                  
            </div>
            
            </div>
        </div>`;


        return html;
    }

}
