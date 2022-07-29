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
        :host{
            --primary-color:tomato;
            --secondary-color:salmon;
            --heading-primary:30px;
            --heading-secondary:25px;
            display:inline-block;
            width:100%;
            min-width:300px;
            max-width:450px;
        }
        section{
            background:var(--primary-color);
        }
        section div{
            background:var(--secondary-color);
        }
        h1{
            font-size:var(--heading-primary)
        }
        p{
            font-size:var(--heading-secondary) 
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