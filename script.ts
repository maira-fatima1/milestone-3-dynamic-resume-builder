
document.getElementById("resumeform")?.addEventListener("submit", function(event){
    event.preventDefault();

    const profilePictureInput =document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement=(document.getElementById("name") as HTMLInputElement)
    const emailElement=(document.getElementById("email") as HTMLInputElement)
    const phoneElement=(document.getElementById("phone") as HTMLInputElement)

    const educationElement=(document.getElementById("education") as HTMLTextAreaElement)
    const experienceElement=(document.getElementById("experience") as HTMLTextAreaElement)
    const skillsElement=(document.getElementById("skills") as HTMLTextAreaElement)

if (profilePictureInput &&
    nameElement &&
     emailElement &&
     phoneElement&&
      educationElement &&
      experienceElement && 
      skillsElement
    )
{
    const name = nameElement.value;
    const email = emailElement.value;
    const phone =phoneElement.value;
    const education =educationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;

     //Profile Picture
     const profilePictureFile = profilePictureInput.files?.[0]
     const profilePictureURL =  profilePictureFile ?URL.createObjectURL(profilePictureFile):'';

    const resumeOutput = `
    <h2>Your Resume </h2>
    ${profilePictureURL?`<img src="${profilePictureURL}" alt= "profilePicture" class="profilePicture">`:''}
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>email:</strong> ${email}</p>
    <p><strong>phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput")
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else{
        console.log("Resume output elements are missing.")}
   }
   else{
        console.log("one or more form elements are missing or empty" );
    }
});