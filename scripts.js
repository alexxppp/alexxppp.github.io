document.addEventListener('DOMContentLoaded', function() {

    // Parallax effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const backgroundText = document.querySelector('.background-text');
        backgroundText.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.503}px))`;
    });

    const languages = {
        Java: {
            code: `
    public <span class="keyword">static</span> void <span class="function">main</span>(String[] <span class="variable">args</span>) {
        if (<span class="condition">you'd like to get in touch</span>) { 
            <br>            <a href="mailto:pacealexwork@gmail.com">pacealexwork@gmail.com</a>; <br>
        }
        if (<span class="condition">you want to see my projects</span>) { 
            <br>            <a href="https://github.com/alexxppp">Visit my Github</a>; <br>
        }
    }`
        },
        Kotlin: {
            code: `
    <span class="function">private</span> <span class="function">fun</span> <span class="function">main</span>() {
        if (<span class="condition">you'd like to get in touch</span>) { 
            <br>            <a href="mailto:pacealexwork@gmail.com">pacealexwork@gmail.com</a> <br>
        }
        if (<span class="condition">you want to see my projects</span>) { 
            <br>            <a href="https://github.com/alexxppp">Visit my Github</a> <br>
        }
    }`
        },
        JavaScript: {
            code: `
    function <span class="function">main</span>() {
        if (<span class="condition">you'd like to get in touch</span>) { 
            <br>            <a href="mailto:pacealexwork@gmail.com">pacealexwork@gmail.com</a> <br>
        }
        if (<span class="condition">you want to see my projects</span>) { 
            <br>            <a href="https://github.com/alexxppp">Visit my Github</a> <br>
        }
    }`
        },
        C: {
            code: `
    int <span class="function">main</span>(int <span class="variable">argc</span>, char* <span class="variable">argv</span>[]) {
        if (<span class="condition">you'd like to get in touch</span>) { 
            <br>            <a href="mailto:pacealexwork@gmail.com">pacealexwork@gmail.com</a>; <br>
        }
        if (<span class="condition">you want to see my projects</span>) { 
            <br>            <a href="https://github.com/alexxppp">Visit my Github</a>; <br>
        }
    }`
        },
        Python: {
            code: `
    def <span class="function">main</span>():
        if <span class="condition">you'd like to get in touch</span>: 
            <br>            <a href="mailto:pacealexwork@gmail.com">pacealexwork@gmail.com</a> <br>
        if <span class="condition">you want to see my projects</span>: 
            <br>            <a href="https://github.com/alexxppp">Visit my Github</a>`
        },
        Dart: {
            code: `
    void <span class="function">main</span>() {
        if (<span class="condition">you'd like to get in touch</span>) { 
            <br>            <a href="mailto:pacealexwork@gmail.com">pacealexwork@gmail.com</a>; <br>
        }
        if (<span class="condition">you want to see my projects</span>) { 
            <br>            <a href="https://github.com/alexxppp">Visit my Github</a>; <br>
        }
    }`
        }
    };
    
    const codeBlock = document.getElementById('code-block');
    const languageButtons = document.querySelectorAll('.language-button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
    
            const selectedLang = button.getAttribute('data-lang');
            codeBlock.innerHTML = languages[selectedLang].code;
            codeBlock.style.color = languages[selectedLang].color;
        });
    });
    
});
