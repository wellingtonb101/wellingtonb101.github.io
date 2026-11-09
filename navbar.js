document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add Font Awesome CSS
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

    const navbar = `
        <div style="text-align: left;">
            <div style="display: inline-flex; align-items: center; justify-content: center; gap: 30px; margin: 30px auto; border: 1px solid black; border-radius: 20px; padding: 20px; background-color: #E3DAC9;">
                <div style="width: 100px; height: 100px; border-radius: 10px; overflow: hidden; border: 1px solid black;">
                    <a href="static/halfmoonbay.jpg" target="_blank">
                        <img src="static/halfmoonbay.jpg" alt="Wellington Bristow" style="width: 300px; height: auto; display: block; margin: -75px 0 0 -100px;">
                    </a>
                </div>
                <div>
                    <h2 style="margin: 0;">Wellington Paul Bristow</h2>
                    <p style="margin: 0px 0;">
                        <i>Ph.D. Student</i><br>
                        <i>Aerospace Engineering (Combustion)</i><br>
                        <i>University of Southern California</i><br>
                        <span style="display: inline-block; margin-top: 5px;">
                            <a href="mailto:wbristow@usc.edu"><i class="fas fa-envelope"></i> Email</a>&nbsp;&nbsp;&nbsp;
                            <a href="https://github.com/wellingtonb101"><i class="fab fa-github"></i> GitHub</a>&nbsp;&nbsp;&nbsp;
                        <a href="https://linkedin.com/in/wellingtonbristow"><i class="fab fa-linkedin"></i> LinkedIn</a>&nbsp;&nbsp;&nbsp;
                        </span>
                    </p>
                </div>
                <div>
                    <p style="margin: 0;"><a href="index.html">Home</a></p>
                    <p style="margin: 0;"><a href="cv.html">CV</a></p>
                    <p style="margin: 0;"><a href="projects.html">Projects</a></p>
                    <p style="margin: 0;"><a href="bloghome.html">Blog</a></p>
                </div>
            </div>
      </div>
    `;
    
    document.getElementById('nav-placeholder').innerHTML = navbar;
});
