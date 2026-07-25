let recipes=new Array();

let demo=document.getElementById("demo");
let navD=document.getElementById("navDiv");
let seq=0;
let seq1=1;
let end=false;
let id=document.getElementById("test");
let len=document.getElementById("recipeL").children.length;
let section2=document.getElementById("section2");
let section1=document.getElementById("section1").offsetWidth;
let windowW=window.innerWidth;
let spacing=windowW-section1;
spacing=spacing/2;
if(phone!=true)
{
  section2.setAttribute("style","margin-left:"+spacing+"px;margin-top:20px;");
  

}

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
let swi=[false,false];

function createButtons()
{
   navD
   let button1=document.createElement("label");
            let button2=document.createElement("label");
            button1.id="nxt";
            button2.id="prv";
            button1.innerHTML="Next"
            button2.innerHTML="Previous"
            button1.setAttribute("class","demoC");
            button2.setAttribute("class","demoC");
            button2.addEventListener("click",()=>
            {
              
                swi[0]=true;
                loader();
                
            });
            button1.addEventListener("click",()=>
            {
          
              swi[0]=false;
              loader();
              
            });
      navD.append(button2);
      if(phone!=false)
        {
           
            let img1=document.getElementById("img1");
            let section1=document.getElementById("section1");
            const cloneDiv=section1.cloneNode;
            section1.remove();
            cloneDiv.id="section1";
            img1.setAttribute("style","width:300px;height:300px;border-radius:20px;margin-left:auto;margin-right:auto;display:block;");
            
            section2.setAttribute("class","phoneDiv");
            demo.setAttribute("class","demoC");
            demo.innerHTML="Home";
            navDiv.setAttribute("style"," display:flex;justify-content:space-around;width:100%;align-items:center;");
            
            
            
            
        }
      navD.append(button1);
      
}
function sizer(img1)
{
            img1.setAttribute("style","width:300px;height:300px;border-radius:20px;margin-left:auto;margin-right:auto;display:block;");
}
function loader()
{
    window.alert(seq);
    
    if(swi[0]==false)
    {
      seq++;
    }
    else
    {
      seq--;
    }
    if(seq<=0)
    {
      seq=5;
    }
    if(seq>=6)
    {
      seq=0
    }
    if(seq==0)
    {
      load0();
    }
    if(seq==1)
    {
      load1();
    }
    if(seq==2)
    {
      load2();
    }
    if(seq==3)
    {
      load3();
    }
    if(seq==4)
    {
      load4();
    }
    if(seq==5)
    {
      load5();
    }
}

recipes[0].addEventListener("click",load0);
function load0()
    {
        
        
        seq=0;
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
            
        }
        catch{}
        //This is the display change
            
        //________________________
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/zukin.jpeg";
        if(phone==true)
        {
          sizer(img);
        }
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
        console.log("added image");
        let ol=document.createElement("ol");
        let liA=document.createElement("li");
        let liB=document.createElement("li");
        let liC=document.createElement("li");
        let liD=document.createElement("li");
        let liE=document.createElement("li");
        let liF=document.createElement("li");
        let liG=document.createElement("li");
        let liH=document.createElement("li");

        liA.innerHTML="Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C). Lightly grease a 2-quart rectangular baking dish."
        liB.innerHTML="Combine zucchini and salt in a large bowl and toss to coat evenly. Transfer zucchini to a colander set in the sink. Let stand to drain excess moisture, 15 minutes. Transfer zucchini to a clean kitchen towel and squeeze out any remaining liquid. Use paper towels to wipe the large bowl dry.";
        liC.innerHTML="Heat oil in a large skillet over medium heat. Add onion and cook until soft and translucent, about 4 minutes. Add garlic and cook until fragrant, 1 minute more."
        liD.innerHTML="Whisk together eggs and pepper in the large bowl. Add zucchini, onion mixture, mozzarella, Cheddar, and 1/2 cup of the Parmesan cheese; combine thoroughly.";
        liE.innerHTML="Transfer mixture to the prepared baking dish and spread into an even layer.";
        liF.innerHTML="Bake, uncovered, for 20 minutes.";
        liG.innerHTML="Meanwhile, combine panko and melted butter in a small bowl. Stir in remaining 1/4 cup Parmesan cheese.";
        liH.innerHTML="Top casserole with breadcrumb mixture and bake until golden and crisp, 10 to 15 minutes. Garnish with chives.";

        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        ol.append(liB);
        ol.append(document.createElement("br"));
        ol.append(liC);
        ol.append(document.createElement("br"));
        ol.append(liD);
        ol.append(document.createElement("br"));
        ol.append(liE);
        ol.append(document.createElement("br"));
        ol.append(liF);
        ol.append(document.createElement("br"));
        ol.append(liG);
        ol.append(document.createElement("br"));
        ol.append(liG);

        temp.append(ol);

        section2.append(temp);
        
        if(swi[1]!=true && phone==true)
        {
          createButtons();
          swi[1]=true;
          seq=0;
        }
        
        
    }

    recipes[1].addEventListener("click",load1);
    
    function load1()
    {
        if(swi[1]!=true)
        {
          createButtons();
          swi[1]=true;
          seq=1;
        }
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
        }
        catch{}
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/cob.jpeg";
        if(phone==true)
        {
          sizer(img);
        }
        let item=document.createElement("p");
        item.innerHTML="This fresh peach cobbler has a hot sugar crust, and while you may resist the idea of pouring boiling water over a lot of sugar on top of your beautiful cobbler dough, don’t be nervous. It makes a delightful, crackly crust over the tender dough, a perfect complement to fresh, juicy peaches.";
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

        li.innerHTML="10 peaches, or more as needed, pitted and sliced";
        li1.innerHTML="2 teaspoons lemon zest";
        li2.innerHTML="2 tablespoons lemon juice";
        li3.innerHTML="2 teaspoons cornstarch";
        li4.innerHTML="2 cups white sugar, divided";
        li5.innerHTML="1/4 teaspoon ground cinnamon";
        li6.innerHTML="1/2 cup butter, softened";
        li7.innerHTML="1 1/2 cups all-purpose flour";
        li8.innerHTML="2 teaspoons baking powder";
        li9.innerHTML="1/2 teaspoons kosher salt";
        li10.innerHTML="3/4 cup whole milk";
        li11.innerHTML="1/2 cup boiling water";
        
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
        let liC=document.createElement("li");
        let liD=document.createElement("li");
        let liE=document.createElement("li");
        let liF=document.createElement("li");
        let liG=document.createElement("li");
        let liH=document.createElement("li");

        liA.innerHTML="Preheat the oven to 350 degrees F (180 degrees C). Place peaches in a 9x13-inch baking dish; set the baking dish on a rimmed baking sheet."
        liB.innerHTML="Add lemon zest, lemon juice, cornstarch, 1 1/2 tablespoons sugar, and cinnamon to peaches, and toss until well combined.  ";
        liC.innerHTML="Combine butter and 1 1/3 cups sugar in a bowl and beat on medium speed with an electric mixer until well combined. Add flour, baking powder, and salt and continue mixing until well blended. Add milk and mix until just combined."
        liD.innerHTML="Spoon mixture over peaches; spread evenly into a thin layer.";
        liE.innerHTML="Sprinkle the top evenly with remaining sugar. Pour water evenly over the sugar layer. ";
        liF.innerHTML="Bake in the preheated oven until browned and bubbly and the batter layer has just set, 65 to 75 minutes. Let stand for 10 minutes before serving.";
        
        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        ol.append(liB);
        ol.append(document.createElement("br"));
        ol.append(liC);
        ol.append(document.createElement("br"));
        ol.append(liD);
        ol.append(document.createElement("br"));
        ol.append(liE);
        ol.append(document.createElement("br"));
        ol.append(liF);
        ol.append(document.createElement("br"));
        

        temp.append(ol);

        section2.append(temp);
        
    }
    recipes[2].addEventListener("click",load2);
   function load2()
   {
        if(swi[1]!=true)
        {
          createButtons();
          swi[1]=true;
          seq=2;
        }
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
        }
        catch{}
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/cab.jpeg";
        if(phone==true)
        {
          sizer(img);
        }
        let item=document.createElement("p");
        item.innerHTML="This dirty cabbage is savory and slightly spicy—Cajun seasoning and andouille sausage do the heavy lifting by adding lots of aroma and heat. Zesty is a pretty great word for this!";
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
        let li13=document.createElement("li");

        li.innerHTML="This dirty cabbage is savory and slightly spicy—Cajun seasoning and andouille sausage do the heavy lifting by adding lots of aroma and heat. “Zesty” is a pretty great word for this!";
        li1.innerHTML="1 pound lean ground sirloin beef";
        li2.innerHTML="1 (12 ounce) package andouille sausage, sliced into rounds";
        li3.innerHTML="3 scallions, thinly sliced, plus more for garnish";
        li4.innerHTML="1 medium red bell pepper, chopped";
        li5.innerHTML="1 medium green bell pepper, chopped";
        li6.innerHTML="1 celery rib, chopped";
        li7.innerHTML="3 cloves garlic, finely chopped";
        li8.innerHTML="2 tablespoons tomato paste";
        li9.innerHTML="2 tablespoons Cajun seasoning, such as McCormick®";
        li10.innerHTML="1 small green cabbage, sliced 1/4-inch-thick";
        li11.innerHTML="1 cup chicken broth";
        li12.innerHTML="3 tablespoons cider vinegar";
        li13.innerHTML="3/4 teaspoon kosher salt";
        
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
        ul.append(li13);

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
        let liC=document.createElement("li");
        let liD=document.createElement("li");
        let liE=document.createElement("li");
        let liF=document.createElement("li");
        let liG=document.createElement("li");
        let liH=document.createElement("li");

        liA.innerHTML="Heat oil in a large Dutch oven over medium-high. Add ground beef; cook, stirring to crumble, until browned, about 7 minutes. Use a slotted spoon to transfer to a paper towel-lined plate."
        liB.innerHTML="Add andouille sausage; cook, stirring often, until browned, about 5 minutes. Transfer to plate with beef.";
        liC.innerHTML="Reduce heat to medium; add scallions, red pepper, green pepper, and celery. Cook, stirring often, until softened, 5 minutes. Add garlic, tomato paste, and Cajun seasoning; cook, stirring constantly, until fragrant, about 1 minute. Stir in cabbage, ground beef, and sausage until fully incorporated. Stir in chicken broth and bring to a simmer over medium-high heat. Reduce heat to medium-low. Cover; cook, stirring occasionally, until cabbage is tender, 25 to 30 minutes. "
        liD.innerHTML="Stir in vinegar and salt. Garnish with scallions.";
        liE.innerHTML="Transfer mixture to the prepared baking dish and spread into an even layer.";
        liF.innerHTML="Bake, uncovered, for 20 minutes.";
        liG.innerHTML="Meanwhile, combine panko and melted butter in a small bowl. Stir in remaining 1/4 cup Parmesan cheese.";
        liH.innerHTML="Top casserole with breadcrumb mixture and bake until golden and crisp, 10 to 15 minutes. Garnish with chives.";

        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        ol.append(liB);
        ol.append(document.createElement("br"));
        ol.append(liC);
        ol.append(document.createElement("br"));
        ol.append(liD);
        

        temp.append(ol);

        section2.append(temp);
        
    }

    recipes[3].addEventListener("click",load3);
    function load3()
    {
        if(swi[1]!=true)
        {
          createButtons();
          swi[1]=true;
          seq=3;
        }
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
        }
        catch{}
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/water.jpeg";
        if(phone==true)
        {
          sizer(img);
        }
        let item=document.createElement("p");
        item.innerHTML="This chunky watermelon salad with feta, arugula, red onion, and tomatoes is enjoyed by all. Thanks to the watermelon, the kids like it also!";
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

        li.innerHTML="3 tablespoons olive oil";
        li1.innerHTML="2 teaspoons white balsamic vinegar";
        li2.innerHTML="½ teaspoon kosher salt";
        li3.innerHTML="8 ounces grape tomatoes, halved";
        li4.innerHTML="3 cups arugula";
        li5.innerHTML="4 large eggs";
        li6.innerHTML="2 pounds watermelon, cubed";
        li7.innerHTML="4 ounces feta cheese, cut into 1/4-inch cubes";
        
        
        ul.append(li);
        ul.append(li1);
        ul.append(li2);
        ul.append(li3);
        ul.append(li4);
        ul.append(li5);
        ul.append(li6);
        ul.append(li7);
       

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
        let liC=document.createElement("li");
        let liD=document.createElement("li");
        let liE=document.createElement("li");
        let liF=document.createElement("li");
        let liG=document.createElement("li");
        let liH=document.createElement("li");

        liA.innerHTML="Whisk olive oil, vinegar, and salt together in a large mixing bowl. Add tomatoes, arugula, and red onion; toss to coat. Gently stir in watermelon and feta cheese to serve.";

        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        

        temp.append(ol);

        section2.append(temp);
        
    }
    
    recipes[4].addEventListener("click",load4);
    function load4()
    {
        if(swi[1]!=true)
        {
          createButtons();
          swi[1]=true;
          seq=4;
        }
        
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
        }
        catch{}
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/cow.jpeg";
        if(phone==true)
        {
          sizer(img);
        }
        let item=document.createElement("p");
        item.innerHTML="These cowboy butter chicken skewers are one of the best ways to put homemade cowboy butter to use. Make the butter ahead of time, then brush it over juicy grilled chicken for an easy dinner packed with bold, buttery, smoky, and spicy flavor.";
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
        let li13=document.createElement("li");

        li.innerHTML="1/2 cup salted butter, softened";
        li1.innerHTML="4 cloves garlic, minced";
        li2.innerHTML="1 ta blespoon chopped fresh flat-leaf parsley";
        li3.innerHTML="1 tablespoon chopped fresh chives";
        li4.innerHTML="2 teaspoons Dijon mustard";
        li5.innerHTML="1 teaspoon lemon zest";
        li6.innerHTML="1 teaspoon smoked paprika";
        li7.innerHTML="1/2 teaspoon lemon juice";
        li8.innerHTML="1/2 teaspoon chopped fresh thyme";
        li9.innerHTML="1/4 teaspoon chili powder";
        li10.innerHTML="1 pound skinless, boneless chicken breasts or thighs";
        li11.innerHTML="1 tablespoon olive oil";
        li12.innerHTML="1/2 teaspoon salt";
        li13.innerHTML="1/2 teaspoon ground black pepper";
        
        
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
        ul.append(li13);

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
        let liC=document.createElement("li");
        let liD=document.createElement("li");
        let liE=document.createElement("li");
        let liF=document.createElement("li");
        let liG=document.createElement("li");
        let liH=document.createElement("li");

        liA.innerHTML="For cowboy butter, stir together butter, garlic, parsley, chives, mustard, lemon zest, smoked paprika, lemon juice, thyme, chili powder, and crushed red pepper in a medium bowl. Wrap in plastic wrap and chill 2 hours, or until ready to use.e";
        liA.innerHTML="Cut chicken in bite-size pieces. Toss chicken to coat with oil, salt and pepper in a medium bowl. Thread on eight 6-inch skewers leaving about 1/4-inch between pieces.";
        liB.innerHTML="Place skewers on the oiled rack of an outdoor grill directly over medium heat. Cover and grill until no longer pink (165 degrees F or 74 degrees C), 8 to 10 minutes, turning once. Or preheat an air fryer to 400 degrees F (200 degrees C). Place skewers in the air fryer basket. Cook until no longer pink (165 degrees F or 74 degrees C), 11 to 12 minutes, turning once.";
        liC.innerHTML="Melt half of the cowboy butter. Drizzle over the cooked chicken skewers to coat. Serve with remaining cowboy butter."
        liD.innerHTML="Stir in vinegar and salt. Garnish with scallions.";

        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        ol.append(liB);
        ol.append(document.createElement("br"));
        ol.append(liC);
       
        temp.append(ol);

        section2.append(temp);
        
    }

    recipes[5].addEventListener("click",load5);
    function load5()
    {
        if(swi[1]!=true)
        {
          createButtons();
          swi[1]=true;
          seq=5;
        }
        
        console.log("testing function1");
        try
        {
            let temp=document.getElementById("temp");
            temp.remove();
        }
        catch{}
        let img=document.createElement("img");
        img.id="img1";
        img.src="./img/sali.jpeg";
        if(phone==true)
        {
          sizer(img);
        }
        let item=document.createElement("p");
        item.innerHTML="This Salisbury steak with mushroom gravy is wonderful over mashed potatoes or rice. A great from-scratch recipe I found a long time ago. The gravy is still good without mushrooms. I've made it for my husband that way.";
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

        li.innerHTML="1 pound lean ground beef";
        li1.innerHTML="⅓ cup dry bread crumbs";
        li2.innerHTML="¼ cup chopped onions";
        li3.innerHTML="1 egg, beaten";
        li4.innerHTML="1 teaspoon salt";
        li5.innerHTML="¼ teaspoon ground black pepper";
        li6.innerHTML="2 cups beef broth";
        li7.innerHTML="1 large onion, thinly sliced";
        li8.innerHTML="1 cup sliced mushrooms";
        li9.innerHTML="3 tablespoons cornstarch";
        li10.innerHTML="3 tablespoons water";
        
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
        let liC=document.createElement("li");
        let liD=document.createElement("li");
        let liE=document.createElement("li");
        let liF=document.createElement("li");
        let liG=document.createElement("li");
        let liH=document.createElement("li");

        liA.innerHTML="Combine ground beef, bread crumbs, chopped onion, egg, salt, and black pepper in a large bowl until evenly mixed. Shape beef mixture into 4 patties, about 3/4-inch thick."
        liB.innerHTML="Fry patties in a large skillet over medium heat until browned on both sides, about 10 minutes. Add beef broth, onion, and mushrooms; bring to a boil. Reduce heat to low, cover, and simmer until patties are no longer pink in the center, about 10 minutes more. Transfer patties to a platter and keep warm.";
        liC.innerHTML="Bring onion mixture to a boil. Mix cornstarch and water in a small bowl; stir into onion mixture. Cook and stir until onion gravy is thickened, about 1 minute. Pour over patties to serve."
    
        // ol.append(stp1);
        ol.append(liA);
        ol.append(document.createElement("br"));
        ol.append(liB);
        ol.append(document.createElement("br"));
        ol.append(liC);

        temp.append(ol);

        section2.append(temp);
        
    }

