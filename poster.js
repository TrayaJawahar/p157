AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
    },
    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id" , id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
          primitive:"ring",
          radiusInner:9,
          radiusOuter:10
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material" , {
          color:"#0077cc",
          opacity:1
        })
        return entityEl
      },
    
  
    createPoster:function(item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive:"plane",
        width:20,
        height:29
      })
      entityEl.setAttribute("position" , {x:0 , y:5 , z:0.1});
      entityEl.setAttribute("material" , {
     src:item.url
      })
      return entityEl
    },
    createTitleEl:function(position,item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("text", {
         font:"exo2bold",
         align:"center",
          color:"#e65100",
          width:70,
          value:item.title
        })
        const elPosition=position
        elPosition.y=-20
        entityEl.setAttribute("position",elPosition)
       return entityEl
      }
  
  });
  