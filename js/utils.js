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
                            
                            
                            <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                   </div>`;
        }
      
  
  
        html += `</div>`
     return html;
    }

}
