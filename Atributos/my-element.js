class myElement extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        this.title = this.getAttribute('title');
        this.parrafo = this.getAttribute('parrafo');
        this.img = this.getAttribute("img");
        }
    
    getTemplates(){
        const template=document.createElement("template");
        template.innerHTML=`
        <section>
        <h2>${this.title}</h2>
        <div>
        <p>${this.parrafo}</p>
        <img src=${this.img}/>
        </div>
        </section>
        
        ${this.GetStyles()}
        `;
        return template
    }
    GetStyles(){
        return `
        <style>
        h2{
            color:red;
        }
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplates().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define("my-element",myElement);