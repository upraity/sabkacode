let isOpen = false;

            document.getElementById("click").addEventListener("click", function () {
                const btn1 = document.getElementById("btn1");
                const btn2 = document.getElementById("btn2");
                const btn3 = document.getElementById("btn3");
                const click = document.getElementById("click");

                if (!isOpen) {
                    // SHOW buttons
                    btn1.classList.remove("hidden"); 
                    btn2.classList.remove("hidden"); 
                    btn3.classList.remove("hidden");
                    click.style.color = "#0d47a1"; // dark blue

                    setTimeout(() => {
                        btn1.classList.add("visible");
                        btn2.classList.add("visible");
                        btn3.classList.add("visible");
                    }, 50);

                    
                    isOpen = true;

                } else {

                    // HIDE animation
                    btn1.classList.remove("visible");
                    btn2.classList.remove("visible");
                    btn3.classList.remove("visible");

                    btn1.classList.add("hide");
                    btn2.classList.add("hide");
                    btn3.classList.add("hide");

                    // After animation ends → fully hide (display:none)
                    setTimeout(() => {
                        btn1.classList.add("hidden");
                        btn2.classList.add("hidden");
                        btn3.classList.add("hidden");

                        btn1.classList.remove("hide");
                        btn2.classList.remove("hide");
                        btn3.classList.remove("hide");
                    }, 300);

                    isOpen = false;
                }
            });
    function whats(){
        window.location.href = "https://wa.me/918938870794";
        // window.location.href = "https://whatsapp.com/channel/0029VaElLRrAYlUMk0qIHX1G";
    }
    function tele(){
        window.location.href = "https://t.me/sabkacode";
    }
    function arattai(){
        window.location.href = "https://chat.arattai.in/groups/n43545f313238383531313639383036383535383136355f32303030353332363533342d47437c3031303134303039303132333137363136323533383832353530";
    }
