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
        // ::slot(span) puede recibir de forma especifica un parametro al cual recibira el cambio de estilo o bien con un
        // con un * se puede dar a enteder que en su busqueda aplicara los estilos a todos los elementos que encuentre afuera
        return `
        <style>
        
        ::slotted(span){
            font-size:30px;
            color:red;
        }
        ::slotted(.texto){
            color:blue;
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