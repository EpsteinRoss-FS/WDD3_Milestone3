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

        let html = `<section class="section about-section gray-bg" id="about">
                    <div class="container faire-container">
                        <div class="row align-items-center flex-row-reverse">
                            <div class="col-lg-6">
                                <div class="about-text go-to">
                                    <h3 class="dark-color">${faire.Name}</h3>
                                    <h6 class="theme-color lead">Dates: ${faire.Dates}</h6>
                                    <p>Theme: ${faire.Theme}</p>
                                    <div class="row about-list">
                                        <div class="col-md-6">
                                            <div class="media">
                                                <label>Website:</label>
                                                <p><a href="${faire.Website}">${faire.Website}</a> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-avatar">
                                    <img class="faire-img-1" src="./assets/faireimgs/${faire.Images[0]}" title="" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="reviews-section">
                        <h3 class="center-text reviews-header">Reviews</h3>
                            <div class="row">
                         `
            for(let i = 0; i < faire.Reviews.length; i++){
                html += `

<!--                <div class="row review-row">-->
                <div class="col review-list-box">
                        <div class="card-box review-box bg-darkblue">
                            <div class="inner review-inner">
                                <h3 class="reviews-header"> ${faire.Reviews[i].Title} </h3>
                                <p>
                                    <div class="row">
                                    ${faire.Reviews[i].Review}
                                    </div>
                                </p>
                            </div>

                        </div>
<!--                        </div>-->
                   </div>`;
            }


                         html +=`</div>
                                
                        </div>
                    </div>
                </section>`;

        return html;
    }

}
