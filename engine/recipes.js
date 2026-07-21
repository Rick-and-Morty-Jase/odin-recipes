let recipes=new Array();
let end=false;
let id=document.getElementById("test");
let len=document.getElementById("recipeL").children.length;
let section2=document.getElementById("section2");
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
        let item=document.createElement("p");
        item.innerHTML="A breakfast sandwich is a sandwich filled with breakfast foods like eggs, meat (bacon, sausage), and cheese, served on bread, bagels, or English muffins, and is a popular, portable meal often made at home or sold in fast-food restaurants. Key components include a bread base, a protein like a fried or scrambled egg, and optional additions like bacon, sausage, or cheese, with variations ranging from classic bacon, egg, and cheese to more unique options like chorizo or pâté.";
        let temp=document.createElement("div");
        temp.id="temp";
        temp.append(item);
        section2.append(temp);
        
    });