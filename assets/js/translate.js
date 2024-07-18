var language = false;

document.addEventListener('DOMContentLoaded', function () {
    const languageSwitch = document.getElementById('language-switch');
    
    languageSwitch.addEventListener('change', function () {
        if (languageSwitch.checked) {
            document.querySelectorAll('.en').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.pt').forEach(el => el.style.display = 'block');
            language = true;
        } else {
            document.querySelectorAll('.en').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.pt').forEach(el => el.style.display = 'none');
            language = false;
        }
    });
});

if(language){
    var typed = new Typed(".typing-text", {
        strings: ["Desenvolvedor Frontend", "Desenvolvedor Backend", "Desenvolvedor Web", "Técnico em Eletroeletrônica", "Especilista em Automação Predial", "Líder de Desbravadores", "Jovem Adventista"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
    })
}else{
    var typed = new Typed(".typing-text", {
        strings: ["Frontend Developer", "Backend Developer", "Web Developer", "Electrical Engineering Technician", "Specialist in Predial Automation", "Lead of Pathfinders", "Young Adventist"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
    })
}