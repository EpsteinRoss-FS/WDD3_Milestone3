class Utils{
   
   
   
    static faireListHTML(list) {
        this.html = "";
        for (let i = 0; i < list.length; i++) {
          let title = list[i].title;
          let items = list[i].items;
    
          this.html += `<section class='board__column'><h2>${title} </h2>
                  <button class='addButton' id="${
                    list[i].id - 1
                  }">Add</button><ul>`;
          for (let a = 0; a < items.length; a++) {
            this.html += `<li><h3>${items[a].title}</h3>
                      <h4><time dateTime='${items[a].dueDate}'> Due Date: ${items[a].dueDate}</time></h4>
                      <p><em>Task Description</em>: ${items[a].description}</p></li>`;
          }
          this.html += `</ul></section>`;
        }
     return this.html;
    }

}
