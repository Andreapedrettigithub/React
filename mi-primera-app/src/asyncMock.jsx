const Products =[
    {
        id:'1',
        name: 'pretal',
        precio:1500,
        categoria:'perros',
        img:'./images/pretalperros.jpg',
        stock:10,
        descripcion:'arnes de malla transpirable con correa para perros'
    },

     { id:'2',
    name: 'bozal',
    precio:700,
    categoria:'perros',
    img:'./images/bozalperro.jpg',
    stock:7,
    descripcion:'bozal para perros chicos medianos y grandes con tiras reflectantes '},

   { id:'3',
    name: 'camas',
    precio:2500,
    categoria:'perros',
    img:'./images/camas-perros.jpg',
    stock:10,
    descripcion:'sofa cama para perros lavables extrafirmes de algodon y varios colores '},

   { id:'4',
    name: 'pretal para gatos',
    precio:1500,
    categoria:'gatos',
    img:'./images/pretalgatos.jpg',
    stock:10,
    descripcion:'arnes de malla transpirable con correa para gatos'},
    
   { id:'5',
    name: 'camas para gatos',
    precio:2500,
    categoria:'gatos',
    img:'./images/camas-gatos.jpg',
    stock:10,
    descripcion:'cama iglu para gatos de varios colores y lavables'}
]

export const getProducts =()=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve (Products)
            
        }, 500);
    })
}