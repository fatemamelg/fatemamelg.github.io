class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <header>
            
        <nav class="navbar navbar-light">
            <a class="navbar-brand" href="#">
            <img src="images/Purple-Monster.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Fatema
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://linktr.ee/fatemam" target="_blank">Linktree</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="files/resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
        
        </header>    
        `;
    }
}

customElements.define('my-header', myHeader);

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer class="row">

            <div class="col-sm-4">
                <h5>Fatema Mahmoud</h5>

                <p>Grad student.</p>

                <!-- FOLLOW BUTTONS -->

                <!-- Github -->

                <!-- Place this tag where you want the button to render. -->
                <a class="github-button" href="https://github.com/fatemamelg" data-count-href="/fatemamelg/followers" data-count-api="/users/fatemamelg#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @fatemamelg on GitHub">Follow @fatemamelg</a>

                <!-- Tumblr 
                <iframe class="btn" frameborder="0" scrolling="no" allowtransparency="true" height="40" width="200" src="https://platform.tumblr.com/v2/follow_button.html?type=follow-blog&amp;tumblelog=fatemamelg&amp;color=blue"></iframe> -->

                
                <!-- Goodreads -->
                <a href="https://www.goodreads.com/review/list/11576061?shelf=read" title="Fatema's book recommendations, liked quotes, book clubs, book trivia, book lists (read shelf)", rel="nofollow"><img alt="Fatema's book recommendations, liked quotes, book clubs, book trivia, book lists (read shelf)" src="https://www.goodreads.com/images/badge/badge1.jpg"></a>

                <!-- END OF FOLLOW BUTTONS -->
            </div>

            <div class="col-sm-4">
                <h6>Links:</h6>
                
                <a href="#">Home</a>
                <br />
                <a href="https://linktr.ee/fatemam" target="_blank">Linktree</a>
                <br />
                <a href="files/resume.pdf" target="_blank">Resume</a>
                <br />  

            </div>

            <div class="follow col-sm-4">
                <h6>Follow me:</h6>
                
                <!-- Github -->
                <a href="https://github.com/fatemamelg" target="_blank" title="Github"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>

                <!-- Gitlab -->
                <a href="https://gitlab.com/fatemamelg" target="_blank" title="Gitlab"><i class="fa fa-gitlab fa-3x" aria-hidden="true"></i></a>
                
                <!-- Linkedin -->      
                <a href="https://www.linkedin.com/in/fatemamelgebali/" target="_blank" title="Linkedin"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a> 

                <!-- Tumblr 
                <a href="http://fatemamelg.tumblr.com/" target="_blank" title="Tumblr"><i class="fa fa-tumblr fa-2x" aria-hidden="true"></i></a> -->

                <!-- Codepen -->
                <a href="https://codepen.io/fatemamelg/" target="_blank" title="Codepen"><i class="fa fa-codepen fa-3x" aria-hidden="true"></i></a>

                <!-- Flickr -->
                <a href="https://www.flickr.com/photos/fatema27" target="_blank" title="Flickr"><i class="fa fa-flickr fa-3x" aria-hidden="true"></i></a> 
            </div>

        </footer>     
        `;
    }
}

customElements.define('my-footer', myFooter);
