class myElement extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        }
    
    getTemplates(){
        const template=document.createElement("template");
        template.innerHTML=`
        <section>
       
        <h2 class='title'>Hola mundo</h2>
        <div>
        <p>Puro Texto rico chavalones</p>
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