AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"", type:"string"}
    },
    init:function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
    },
    handleMouseEnter:function(){
    this.el.addEventListener("mouseenter", ()=>{
        console.log("mouse enter")
        this.handlePlaces()
    })
    },
    handlePlaces:function(){
        const id = this.el.getAttribute("id")
        const PostersID=["avengers-secret-wars","spiderman-2","spiderman-unlimited","uncanny-x-men"]
        if(PostersID.includes(id)){
            const posterContainer=document.querySelector("#posters-container")
            posterContainer.setAttribute("cursor-listener", {
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"blue",
                opacity:1
            })
        }
    },
    handleMouseLeave:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material",{color:"yellow", opacity:1})
                }
            }
        })
    }

})