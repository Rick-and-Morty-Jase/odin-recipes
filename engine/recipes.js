let recipes=new Array();
let end=false;
let id=document.getElementById("test");
let len=document.getElementById("recipeL").children.length;
let section2=document.getElementById("section2");
let section1=document.getElementById("section1").offsetWidth;
let windowW=window.innerWidth;
let spacing=windowW-section1;
spacing=spacing/2;
section2.setAttribute("style","margin-left:"+spacing+"px;margin-top:20px;");
//thinking of user adding recipes and how one would load this automatically 
for(let i=0;i<len;i++)
{
    recipes[i]=document.getElementById("l"+(i+1).toString());
    recipes[i].setAttribute("class","recipeItems")
    /*recipe[i].addEventListener("click",() => 
    {
        //this would probably be a call from Node JS
    }
    );*/
}
// will have to think about this properly i am running out of time its 19:48 im just going to t manually for now

recipes[0].addEventListener("click",()=>
    {
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
        }
        catch{}
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/zukin.jpeg";
        let item=document.createElement("p");
        item.innerHTML="This shredded zucchini casserole is a great recipe when your garden is overflowing with zucchini. Cheesy with a crunchy panko topping, it makes a tasty side dish to any roasted meat or fish.";
        let temp=document.createElement("div");
        temp.id="temp";

        let ingred=document.createElement("h3");
        ingred.innerHTML="Ingredients";

        let ul=document.createElement("ul");
        let li=document.createElement("li");
        let li1=document.createElement("li");
        let li2=document.createElement("li");
        let li3=document.createElement("li");
        let li4=document.createElement("li");
        let li5=document.createElement("li");
        let li6=document.createElement("li");
        let li7=document.createElement("li");
        let li8=document.createElement("li");
        let li9=document.createElement("li");
        let li10=document.createElement("li");
        let li11=document.createElement("li");
        let li12=document.createElement("li");

        li.innerHTML="8 cups coarsely shredded zucchini";
        li1.innerHTML="1/2 teaspoon salt";
        li2.innerHTML="1 tablespoon olive oil";
        li3.innerHTML="1 cup finely chopped onion";
        li4.innerHTML="4 cloves garlic, minced";
        li5.innerHTML="4 large eggs";
        li6.innerHTML="1/2 teaspoon freshly ground black pepper";
        li7.innerHTML="1 1/2 cups shredded mozzarella cheese";
        li8.innerHTML="1 1/2 cups shredded sharp Cheddar cheese";
        li9.innerHTML="3/4 cup grated Parmesan cheese, divided";
        li10.innerHTML="2/3 cup Italian seasoned panko breadcrumbs";
        li11.innerHTML="3 tablespoons butter, melted";
        li12.innerHTML="chopped chives to taste, for garnish";
        
        ul.append(li);
        ul.append(li1);
        ul.append(li2);
        ul.append(li3);
        ul.append(li4);
        ul.append(li5);
        ul.append(li6);
        ul.append(li7);
        ul.append(li8);
        ul.append(li9);
        ul.append(li10);
        ul.append(li11);
        ul.append(li12);

        let dir=document.createElement("h3");
        dir.innerHTML="Directions";

        temp.append(img);
        temp.append(item);
        temp.append(ingred);
        temp.append(ul);
        temp.append(dir);

        let ol=document.createElement("ol");
        let liA=document.createElement("li");
        let liB=document.createElement("li");

        liA.innerHTML="Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C). Lightly grease a 2-quart rectangular baking dish."
        liB.innerHTML="Combine zucchini and salt in a large bowl and toss to coat evenly. Transfer zucchini to a colander set in the sink. Let stand to drain excess moisture, 15 minutes. Transfer zucchini to a clean kitchen towel and squeeze out any remaining liquid. Use paper towels to wipe the large bowl dry.";
        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        ol.append(liB);

        temp.append(ol);

        section2.append(temp);
        
    });