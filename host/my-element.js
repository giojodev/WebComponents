class myElement extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        }
    
    getTemplates(){
        const template=document.createElement("template");
        template.innerHTML=`
        <section>
        <h2>
        <slot name="title"></slot>
        </h2>
        <div>
        <p>
        <slot name="parrafo"></slot>
        </p>
        </div>
        </section>
        
        ${this.GetStyles()}
        `;
        return template
    }
    GetStyles(){
        return `
        <style>
        :host{
            display:inline-block;
            width:100%;
            min-width:300px;
            max-width:450px;
            font-size:20px;
            background: grey;
        }
        :host(.blue){
            background:blue;
        }
        :host([yellow]){
            background:yellow;
        }
        :host([yellow]) h2{
            color:grey;
        }
        :host([yellow]) parrafo{
            color:grey;
        }
        :host-context(article.card){
            display:blocK;
            max-width:100%;
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