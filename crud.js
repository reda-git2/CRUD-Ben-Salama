const dash=document.getElementById("dashboard");
const aj=document.getElementById("ajouter");
const liste=document.getElementById("liste");
const ajouterProf=document.getElementById("ajouterProf")
const mDashboard = document.getElementById("mDashboard");
const mAjouter = document.getElementById("mAjouter");
const mListe = document.getElementById("mListe");
const mAjouterProf=document.getElementById("mAjouterProf")
const form = document.getElementById("form");
const form2= document.getElementById("form2")
const table = document.getElementById("tbody");
const table2 = document.getElementById("tbody2")
function affichage(mot){
  dash.classList.add("cacher");
  aj.classList.add("cacher");
  liste.classList.add("cacher");
  ajouterProf.classList.add("cacher")
  mot.classList.remove("cacher");
}
mDashboard.addEventListener("click", () => affichage(dash));
mAjouter.addEventListener("click", () => affichage(aj));
mListe.addEventListener("click", () => affichage(liste));
mAjouterProf.addEventListener("click", () =>affichage(ajouterProf));
form.addEventListener("submit",function(e){
   e.preventDefault(); 
   const nom = document.getElementById("nom").value;
   const age = document.getElementById("age").value;
   const email = document.getElementById("email").value;
   const identifiant = document.getElementById("identifiant").value;
   const tr = document.createElement("tr");
   tr.innerHTML = `
    <td>${nom}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${identifiant}</td>
    <td><button onclick="this.closest('tr').remove()">Effacer</button></td>
  `;
   table.appendChild(tr);
   form.reset();
});
  form2.addEventListener("submit",function(e){
   e.preventDefault(); 
   const nom2 = document.getElementById("nom2").value;
   const email2 = document.getElementById("email2").value;
   const identifiant2 = document.getElementById("identifiant2").value;
   const tr2 = document.createElement("tr");
   tr2.innerHTML = `
    <td>${nom2}</td>
    <td>${email2}</td>
    <td>${identifiant2}</td>
    <td><button onclick="this.closest('tr').remove()">Effacer</button></td>
  `;
  table2.appendChild(tr2);
  form2.reset();
  //commentaire pour recommit
  });