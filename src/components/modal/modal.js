
myModal=(event)=>{
    let body=document.querySelectorAll('body')[0] 
    let src=event.target.getAttribute('src')
    let link=event.target.getAttribute('link-url')
    let modalImag=document.getElementById('ModalImages')
     
    console.log('ola',modalImag)
    toggleModal=()=>{
      return modalImag.classList.toggle('show')
    }
 


     callbackLink = ()=>{

      if(link){ 

        window.open(link, '_blank');

      }else{
        alert('Estamos trabalhando nisso, volte mais tarde!')
      }

     }
 
  
      modalImag.innerHTML=` 
       <div onclick="toggleModal()" class='overlay' style="
    background: #373ac963;
    position: fixed;
    width: 100%;
    height: 100%;
">  </div>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header"> 
                <button onclick='toggleModal()' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="card" style='  
                  position: fixed;
                  left: 0;
                  background: white;
                  width: 100%;
                  bottom: 0;
                  padding: 20px 10px;'>


                  <div class='container'>
                    <div class='row  justify-content-center'>
                     <div class='col-lg-5 align-items-center d-flex flex-column'>
                         <button
                         onClick='callbackLink()'
                         class="btn btn-outline-primary" target="_blank">
                    <i class="fa-regular fa-eye"></i>
                    Demonstração</button>
                    <p class='text-center mt-1'> <a href="#"  onclick='toggleModal()' class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sair</a></p>

                    </div>
                    </div>
                  </div>
               
                  </div>
                  <img class="img-fluid" src="`+src+`" alt="" >
            
              </div>
              <div class="modal-footer">
                <button type="button" onclick='toggleModal()' class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" onclick='toggleModal()' class="btn btn-primary">Voltar</button>
              </div>
            </div>
          </div>
        

          
 
    `
    return toggleModal()
}


 