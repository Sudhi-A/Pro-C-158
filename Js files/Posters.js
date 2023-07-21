AFRAME.registerComponent("comic-poster",{
   init: function () {
      this.posterContainer = this.el;
      this.createPoster()
    },
 createPoster: function(){
    const PosterReference=[
      {
         id:"avengers-secret-wars",
         title:"Avengers- Secret Wars",
         url:"./Assests/Avengers Secret Wars.jpg"
      },
      {
         id:"spiderman-2",
         title:"Marvel's Spider-man 2",
         url:"./Assests/Marvel's Spiderman2.jpg"
      },
      {
         id:"spiderman-unlimited",
         title:"Marvel's Spiderman-unlimited",
         url:"./Assests/Spiderman-unlimited.jpg"
      },
      {
         id:"uncanny-x-men",
         title:"The Uncanny X-men",
         url:"./Assests/The uncanny X-men.jpg"
      }
    ]
    let prevoiusXPosition = -60;

    for (var item of PosterReference) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const b1=this.createBorder(position, item.id)
      // Poster Element
     const Post1=this.createPosters(item)
     b1.appendChild(Post1)
      // Title Text Element
     const title1=this.createTitle(position,item)
     b1.appendChild(title1)
      this.posterContainer.appendChild(b1);
    }
  },
  createBorder: function(position, id){
    const border1 = document.createElement("a-entity")
    border1.setAttribute("id", id)
    border1.setAttribute("visible", true)
    border1.setAttribute("geometry", {
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    })
    border1.setAttribute("position", position)
    border1.setAttribute("material", {color:"yellow", opacity:0.4})
    border1.setAttribute("cursor-listener",{})
    return border1  
  },
  createPosters: function(item){
    const P1 = document.createElement("a-entity")
    P1.setAttribute("visible", true)
    P1.setAttribute("geometry", {
      primitive:"circle",
      radius:9
    })
    P1.setAttribute("material",{
      src:item.url
    })
    return P1
  },
  createTitle: function(position, item){
    const Title1 = document.createElement("a-entity")
    Title1.setAttribute("visible", true)
    Title1.setAttribute("text", {
      font:"exo2bold",
      align:"centre",
      width:70,
      color:"purple",
      value:item.title
    })
    const pos = position
    pos.y=-20
    pos.x= pos.x+28
    Title1.setAttribute("position", pos)
    return Title1
  },
  
});
 
